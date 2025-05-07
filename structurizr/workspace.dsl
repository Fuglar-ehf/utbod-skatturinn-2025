workspace {

  model {
      !include people-and-software-systems.dsl
  }

  views {
    systemContext taxReturnPortal {
      include *
      exclude xroad
      autolayout lr
      description "System context for tax return portal"
    }

    container taxReturnPortal {
      include *
      include thjodskraApi
      include thjodskraXRoad
      autolayout lr
      description "Container diagram for tax return portal"
    }

    styles {
      element "Software System" {
          background #1168bd
          color #ffffff
      }
      element "Existing System" {
          background #ebecf0
          color #000000
      }
      element "Person" {
          shape person
          background #08427b
          color #ffffff
      }
      element "Container" {
          background #438dd5
          color #ffffff
      }
      element "Web Browser" {
          shape WebBrowser
      }
      element "Database" {
          shape Cylinder
      }
      element "Component" {
          background #85bbf0
          color #000000
      }
      element "Failover" {
          opacity 25
      }
    }
  }
}
