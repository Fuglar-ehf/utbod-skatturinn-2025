workspace {

  model {
    user = person "User" {
      description "A citizen or resident using island.is"
    }

    islandIs = softwareSystem "island.is" {
      description "Frontend portal for government services"
    }

    skattApi = softwareSystem "skatturinn-api" {
      description "Backend API for Skatturinn services"
    }

    natRegApi = softwareSystem "National Registry API" {
      description "External API that provides registry data"
      tags "external"
    }

    user -> islandIs "Uses through browser"
    islandIs -> skattApi "Sends user requests"
    islandIs -> natRegApi "Fetches identity data"
    skattApi -> natRegApi "Fetches registry data"
  }

  views {
    systemContext skattApi {
      include *
      autolayout lr
      description "System context for Skatturinn API"
    }

    styles {
      element "Person" {
        shape person
        background #08427b
        color #ffffff
      }

      element "Software System" {
        shape roundedbox
        background #1168bd
        color #ffffff
      }

      element "external" {
        background #bbbbbb
        color #000000
      }
    }
  }
}
