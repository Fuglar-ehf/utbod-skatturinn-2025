
taxPayer -> taxReturnApplication "Views and submits tax return"

taxReturnApplication -> servicePortalApi "Provides tax return information"

servicePortalApi -> skatturApi "Provides tax return data"
servicePortalApi -> thjodskra_api "Provides user information"

skatturApi -> skatturDb "Stores tax return data"