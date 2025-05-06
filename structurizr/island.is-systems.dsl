
applicationSystem = softwaresystem "Application System" {
  description "Coordinates application processes"
  tags "Existing System"
}

servicePortal = softwareSystem "Service Portal" {
  description "Provides user specific data"
  tags "Existing System"

  servicePortalApi = container "Service Portal API" {
    description "Provides user specific data"
    technology "GraphQL"
  }
}

ias = softwareSystem "Authentication Service" {
  description "Enables users to authenticate securely"
  tags "Existing System"
}

web = softwareSystem "Web" {
  description "Displays content in a user friendly way"
  tags "Existing System"
}