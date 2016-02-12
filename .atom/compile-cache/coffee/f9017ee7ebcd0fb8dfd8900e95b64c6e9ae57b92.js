(function() {
  module.exports = {
    screenShake: {
      type: "object",
      properties: {
        minIntensity: {
          title: "Screen Shake - Minimum Intensity",
          description: "The minimum (randomized) intensity of the shake.",
          type: "integer",
          "default": 1,
          minimum: 0,
          maximum: 100
        },
        maxIntensity: {
          title: "Screen Shake - Maximum Intensity",
          description: "The maximum (randomized) intensity of the shake.",
          type: "integer",
          "default": 3,
          minimum: 0,
          maximum: 100
        },
        enabled: {
          title: "Screen Shake - Enabled",
          description: "Turn the shaking on/off.",
          type: "boolean",
          "default": true
        }
      }
    },
    particles: {
      type: "object",
      properties: {
        enabled: {
          title: "Particles - Enabled",
          description: "Turn the particles on/off.",
          type: "boolean",
          "default": true
        },
        totalCount: {
          type: "object",
          properties: {
            max: {
              title: "Particles - Max Total",
              description: "The maximum total number of particles on the screen.",
              type: "integer",
              "default": 500,
              minimum: 0
            }
          }
        },
        spawnCount: {
          type: "object",
          properties: {
            min: {
              title: "Particles - Minimum Spawned",
              description: "The minimum (randomized) number of particles spawned on input.",
              type: "integer",
              "default": 5
            },
            max: {
              title: "Particles - Maximum Spawned",
              description: "The maximum (randomized) number of particles spawned on input.",
              type: "integer",
              "default": 15
            }
          }
        },
        size: {
          type: "object",
          properties: {
            min: {
              title: "Particles - Minimum Size",
              description: "The minimum (randomized) size of the particles.",
              type: "integer",
              "default": 2,
              minimum: 0
            },
            max: {
              title: "Particles - Maximum Size",
              description: "The maximum (randomized) size of the particles.",
              type: "integer",
              "default": 4,
              minimum: 0
            }
          }
        }
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiL2hvbWUvcXVhbC8uYXRvbS9wYWNrYWdlcy9hY3RpdmF0ZS1wb3dlci1tb2RlL2xpYi9jb25maWctc2NoZW1hLmNvZmZlZSIKICBdLAogICJuYW1lcyI6IFtdLAogICJtYXBwaW5ncyI6ICJBQUFBO0FBQUEsRUFBQSxNQUFNLENBQUMsT0FBUCxHQUNFO0FBQUEsSUFBQSxXQUFBLEVBQ0U7QUFBQSxNQUFBLElBQUEsRUFBTSxRQUFOO0FBQUEsTUFDQSxVQUFBLEVBQ0U7QUFBQSxRQUFBLFlBQUEsRUFDRTtBQUFBLFVBQUEsS0FBQSxFQUFPLGtDQUFQO0FBQUEsVUFDQSxXQUFBLEVBQWEsa0RBRGI7QUFBQSxVQUVBLElBQUEsRUFBTSxTQUZOO0FBQUEsVUFHQSxTQUFBLEVBQVMsQ0FIVDtBQUFBLFVBSUEsT0FBQSxFQUFTLENBSlQ7QUFBQSxVQUtBLE9BQUEsRUFBUyxHQUxUO1NBREY7QUFBQSxRQVFBLFlBQUEsRUFDRTtBQUFBLFVBQUEsS0FBQSxFQUFPLGtDQUFQO0FBQUEsVUFDQSxXQUFBLEVBQWEsa0RBRGI7QUFBQSxVQUVBLElBQUEsRUFBTSxTQUZOO0FBQUEsVUFHQSxTQUFBLEVBQVMsQ0FIVDtBQUFBLFVBSUEsT0FBQSxFQUFTLENBSlQ7QUFBQSxVQUtBLE9BQUEsRUFBUyxHQUxUO1NBVEY7QUFBQSxRQWdCQSxPQUFBLEVBQ0U7QUFBQSxVQUFBLEtBQUEsRUFBTyx3QkFBUDtBQUFBLFVBQ0EsV0FBQSxFQUFhLDBCQURiO0FBQUEsVUFFQSxJQUFBLEVBQU0sU0FGTjtBQUFBLFVBR0EsU0FBQSxFQUFTLElBSFQ7U0FqQkY7T0FGRjtLQURGO0FBQUEsSUF5QkEsU0FBQSxFQUNFO0FBQUEsTUFBQSxJQUFBLEVBQU0sUUFBTjtBQUFBLE1BQ0EsVUFBQSxFQUNFO0FBQUEsUUFBQSxPQUFBLEVBQ0U7QUFBQSxVQUFBLEtBQUEsRUFBTyxxQkFBUDtBQUFBLFVBQ0EsV0FBQSxFQUFhLDRCQURiO0FBQUEsVUFFQSxJQUFBLEVBQU0sU0FGTjtBQUFBLFVBR0EsU0FBQSxFQUFTLElBSFQ7U0FERjtBQUFBLFFBTUEsVUFBQSxFQUNFO0FBQUEsVUFBQSxJQUFBLEVBQU0sUUFBTjtBQUFBLFVBQ0EsVUFBQSxFQUNFO0FBQUEsWUFBQSxHQUFBLEVBQ0U7QUFBQSxjQUFBLEtBQUEsRUFBTyx1QkFBUDtBQUFBLGNBQ0EsV0FBQSxFQUFhLHNEQURiO0FBQUEsY0FFQSxJQUFBLEVBQU0sU0FGTjtBQUFBLGNBR0EsU0FBQSxFQUFTLEdBSFQ7QUFBQSxjQUlBLE9BQUEsRUFBUyxDQUpUO2FBREY7V0FGRjtTQVBGO0FBQUEsUUFnQkEsVUFBQSxFQUNFO0FBQUEsVUFBQSxJQUFBLEVBQU0sUUFBTjtBQUFBLFVBQ0EsVUFBQSxFQUNFO0FBQUEsWUFBQSxHQUFBLEVBQ0U7QUFBQSxjQUFBLEtBQUEsRUFBTyw2QkFBUDtBQUFBLGNBQ0EsV0FBQSxFQUFhLGdFQURiO0FBQUEsY0FFQSxJQUFBLEVBQU0sU0FGTjtBQUFBLGNBR0EsU0FBQSxFQUFTLENBSFQ7YUFERjtBQUFBLFlBTUEsR0FBQSxFQUNFO0FBQUEsY0FBQSxLQUFBLEVBQU8sNkJBQVA7QUFBQSxjQUNBLFdBQUEsRUFBYSxnRUFEYjtBQUFBLGNBRUEsSUFBQSxFQUFNLFNBRk47QUFBQSxjQUdBLFNBQUEsRUFBUyxFQUhUO2FBUEY7V0FGRjtTQWpCRjtBQUFBLFFBK0JBLElBQUEsRUFDRTtBQUFBLFVBQUEsSUFBQSxFQUFNLFFBQU47QUFBQSxVQUNBLFVBQUEsRUFDRTtBQUFBLFlBQUEsR0FBQSxFQUNFO0FBQUEsY0FBQSxLQUFBLEVBQU8sMEJBQVA7QUFBQSxjQUNBLFdBQUEsRUFBYSxpREFEYjtBQUFBLGNBRUEsSUFBQSxFQUFNLFNBRk47QUFBQSxjQUdBLFNBQUEsRUFBUyxDQUhUO0FBQUEsY0FJQSxPQUFBLEVBQVMsQ0FKVDthQURGO0FBQUEsWUFPQSxHQUFBLEVBQ0U7QUFBQSxjQUFBLEtBQUEsRUFBTywwQkFBUDtBQUFBLGNBQ0EsV0FBQSxFQUFhLGlEQURiO0FBQUEsY0FFQSxJQUFBLEVBQU0sU0FGTjtBQUFBLGNBR0EsU0FBQSxFQUFTLENBSFQ7QUFBQSxjQUlBLE9BQUEsRUFBUyxDQUpUO2FBUkY7V0FGRjtTQWhDRjtPQUZGO0tBMUJGO0dBREYsQ0FBQTtBQUFBIgp9

//# sourceURL=/home/qual/.atom/packages/activate-power-mode/lib/config-schema.coffee
