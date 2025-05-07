
taxPayer -> taxReturnApplication "Views and submits tax return"

taxReturnApplication -> xroad "Submits tax return data"
xroad -> skatturXRoad "Submits tax return data"
skatturXRoad -> skatturApi "Submits tax return data"

skatturApi -> skatturDb "Stores tax return data"

taxReturnApplication -> xroad "Provides user information"
xroad -> thjodskraXRoad "Provides user information"
thjodskraXRoad -> thjodskraApi "Provides user information"
