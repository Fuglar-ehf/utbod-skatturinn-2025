
taxPayer -> taxReturnApplication "Views and submits tax return"

taxReturnApplication -> thjodskra_api "Provides user information"
taxReturnApplication -> skatturApi "Submits tax return data"

skatturApi -> skatturDb "Stores tax return data"