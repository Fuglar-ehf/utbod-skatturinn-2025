
# taxPayer -> web "Views information about tax returns"
taxPayer -> taxReturnPortal "Views and submits tax returns"
# taxPayer -> myPages "Views submitted tax returns"

taxReturnPortal -> ias "Authenticates users"
taxReturnPortal -> applicationSystem "Coordinates tax return process"
taxReturnPortal -> web "Provides information about tax returns"
taxReturnPortal -> servicePortal "Provides users tax return information"
