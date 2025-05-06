import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Person } from '../models/person.model';
import { parseStringPromise } from 'xml2js';
import * as fs from 'fs';
import * as path from 'path';

function asText(val: any): string {
  if (Array.isArray(val)) {
    return val.join(', ');
  }
  if (typeof val === 'object' && val !== null) {
    return JSON.stringify(val);
  }
  return val ?? '';
}

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Person)
    private readonly personModel: typeof Person
  ) {}

  async run() {
    const xmlPath = path.join(
      __dirname,
      '../../assets/thjothskra-gervigogn.xml'
    );
    const xml = fs.readFileSync(xmlPath, 'utf-8');
    const parsed = await parseStringPromise(xml, { explicitArray: false });

    const people = parsed.Einstaklingar.Einstaklingur;

    for (const person of Array.isArray(people) ? people : [people]) {
      await this.personModel.upsert({
        national_id: asText(person.Kennitala),
        name: asText(person.Nafn),
        nominative_case_address: asText(person.HeimiliNefnifall),
        dative_case_address: asText(person.HeimiliThagufall),
        postal_code: asText(person.PostNr),
        gender: asText(person.Kyn),
        birth_date: person.FaedD ? new Date(person.FaedD) : null,
        family_id: asText(person.FjolskylduNumer),
        marital_status: asText(person.Hjuskapastada),
        nationality: asText(person.Rikisfang),
      } as any);
    }

    console.log(
      `✅ Seeded ${Array.isArray(people) ? people.length : 1} person(s)`
    );
  }
}
