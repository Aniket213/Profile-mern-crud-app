import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Particle() {
    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
    };


      const particle = 
      {
        background: {
          color: {
            value: "#000",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",    // 
            },
            onHover: {
              enable: true,
              mode: "repulse",      //
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            "connect": {
              "distance": 80,
              "links": {
                "opacity": 0.5
              },
              "radius": 60
            },
            
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 1,        //  opacity of links
            width: 1,           // 
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 5,         //
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 70,      // no. of particles
          },
          opacity: {
            value: 1,       //opacity of balls
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 1 },
          },
        },
        detectRetina: true,
      }
      // const fireworks =
      // {
      //   "autoPlay": true,
      //   "background": {
      //     "color": {
      //       "value": "#000"
      //     },
      //     "image": "",
      //     "position": "",
      //     "repeat": "",
      //     "size": "",
      //     "opacity": 1
      //   },
      //   "backgroundMask": {
      //     "composite": "destination-out",
      //     "cover": {
      //       "color": {
      //         "value": "#fff"
      //       },
      //       "opacity": 1
      //     },
      //     "enable": false
      //   },
      //   "fullScreen": {
      //     "enable": true,
      //     "zIndex": -1
      //   },
      //   "detectRetina": true,
      //   "duration": 0,
      //   "fpsLimit": 120,
      //   "interactivity": {
      //     "detectsOn": "window",
      //     "events": {
      //       "onClick": {
      //         "enable": false,
      //         "mode": []
      //       },
      //       "onDiv": {
      //         "selectors": [],
      //         "enable": false,
      //         "mode": [],
      //         "type": "circle"
      //       },
      //       "onHover": {
      //         "enable": false,
      //         "mode": [],
      //         "parallax": {
      //           "enable": false,
      //           "force": 2,
      //           "smooth": 10
      //         }
      //       },
      //       "resize": true
      //     },
      //     "modes": {
      //       "attract": {
      //         "distance": 200,
      //         "duration": 0.4,
      //         "easing": "ease-out-quad",
      //         "factor": 1,
      //         "maxSpeed": 50,
      //         "speed": 1
      //       },
      //       "bounce": {
      //         "distance": 200
      //       },
      //       "bubble": {
      //         "distance": 200,
      //         "duration": 0.4,
      //         "mix": false,
      //         "divs": {
      //           "distance": 200,
      //           "duration": 0.4,
      //           "mix": false,
      //           "selectors": []
      //         }
      //       },
      //       "connect": {
      //         "distance": 80,
      //         "links": {
      //           "opacity": 0.5
      //         },
      //         "radius": 60
      //       },
      //       "grab": {
      //         "distance": 100,
      //         "links": {
      //           "blink": false,
      //           "consent": false,
      //           "opacity": 1
      //         }
      //       },
      //       "light": {
      //         "area": {
      //           "gradient": {
      //             "start": {
      //               "value": "#ffffff"
      //             },
      //             "stop": {
      //               "value": "#000000"
      //             }
      //           },
      //           "radius": 1000
      //         },
      //         "shadow": {
      //           "color": {
      //             "value": "#000000"
      //           },
      //           "length": 2000
      //         }
      //       },
      //       "push": {
      //         "default": true,
      //         "groups": [],
      //         "quantity": 4
      //       },
      //       "remove": {
      //         "quantity": 2
      //       },
      //       "repulse": {
      //         "distance": 200,
      //         "duration": 0.4,
      //         "factor": 100,
      //         "speed": 1,
      //         "maxSpeed": 50,
      //         "easing": "ease-out-quad",
      //         "divs": {
      //           "distance": 200,
      //           "duration": 0.4,
      //           "factor": 100,
      //           "speed": 1,
      //           "maxSpeed": 50,
      //           "easing": "ease-out-quad",
      //           "selectors": []
      //         }
      //       },
      //       "slow": {
      //         "factor": 3,
      //         "radius": 200
      //       },
      //       "trail": {
      //         "delay": 1,
      //         "pauseOnStop": false,
      //         "quantity": 1
      //       }
      //     }
      //   },
      //   "manualParticles": [],
      //   "motion": {
      //     "disable": false,
      //     "reduce": {
      //       "factor": 4,
      //       "value": true
      //     }
      //   },
      //   "particles": {
      //     "bounce": {
      //       "horizontal": {
      //         "random": {
      //           "enable": false,
      //           "minimumValue": 0.1
      //         },
      //         "value": 1
      //       },
      //       "vertical": {
      //         "random": {
      //           "enable": false,
      //           "minimumValue": 0.1
      //         },
      //         "value": 1
      //       }
      //     },
      //     "collisions": {
      //       "bounce": {
      //         "horizontal": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0.1
      //           },
      //           "value": 1
      //         },
      //         "vertical": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0.1
      //           },
      //           "value": 1
      //         }
      //       },
      //       "enable": false,
      //       "mode": "bounce",
      //       "overlap": {
      //         "enable": true,
      //         "retries": 0
      //       }
      //     },
      //     "color": {
      //       "value": "#fff",
      //       "animation": {
      //         "h": {
      //           "count": 0,
      //           "enable": false,
      //           "offset": 0,
      //           "speed": 1,
      //           "decay": 0,
      //           "sync": true
      //         },
      //         "s": {
      //           "count": 0,
      //           "enable": false,
      //           "offset": 0,
      //           "speed": 1,
      //           "decay": 0,
      //           "sync": true
      //         },
      //         "l": {
      //           "count": 0,
      //           "enable": false,
      //           "offset": 0,
      //           "speed": 1,
      //           "decay": 0,
      //           "sync": true
      //         }
      //       }
      //     },
      //     "destroy": {
      //       "mode": "split",
      //       "split": {
      //         "count": 1,
      //         "factor": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0
      //           },
      //           "value": 0.333333
      //         },
      //         "rate": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0
      //           },
      //           "value": 100
      //         },
      //         "sizeOffset": true,
      //         "particles": {
      //           "stroke": {
      //             "width": 0
      //           },
      //           "color": {
      //             "value": [
      //               "#ff595e",
      //               "#ffca3a",
      //               "#8ac926",
      //               "#1982c4",
      //               "#6a4c93"
      //             ]
      //           },
      //           "number": {
      //             "value": 0
      //           },
      //           "collisions": {
      //             "enable": false
      //           },
      //           "opacity": {
      //             "value": {
      //               "min": 0.1,
      //               "max": 1
      //             },
      //             "animation": {
      //               "enable": true,
      //               "speed": 0.7,
      //               "sync": false,
      //               "startValue": "max",
      //               "destroy": "min"
      //             }
      //           },
      //           "shape": {
      //             "type": "circle"
      //           },
      //           "size": {
      //             "value": 2,
      //             "animation": {
      //               "enable": false
      //             }
      //           },
      //           "life": {
      //             "count": 1,
      //             "duration": {
      //               "value": {
      //                 "min": 1,
      //                 "max": 2
      //               }
      //             }
      //           },
      //           "move": {
      //             "enable": true,
      //             "gravity": {
      //               "enable": false
      //             },
      //             "speed": 2,
      //             "direction": "none",
      //             "random": true,
      //             "straight": false,
      //             "outMode": "destroy"
      //           }
      //         }
      //       }
      //     },
      //     "gradient": [],
      //     "groups": {},
      //     "links": {
      //       "blink": false,
      //       "color": {
      //         "value": "#fff"
      //       },
      //       "consent": false,
      //       "distance": 100,
      //       "enable": false,
      //       "frequency": 1,
      //       "opacity": 1,
      //       "shadow": {
      //         "blur": 5,
      //         "color": {
      //           "value": "#000"
      //         },
      //         "enable": false
      //       },
      //       "triangles": {
      //         "enable": false,
      //         "frequency": 1
      //       },
      //       "width": 1,
      //       "warp": false
      //     },
      //     "move": {
      //       "angle": {
      //         "offset": 0,
      //         "value": 90
      //       },
      //       "attract": {
      //         "distance": 200,
      //         "enable": false,
      //         "rotate": {
      //           "x": 3000,
      //           "y": 3000
      //         }
      //       },
      //       "center": {
      //         "x": 50,
      //         "y": 50,
      //         "radius": 0
      //       },
      //       "decay": 0,
      //       "distance": {},
      //       "direction": "none",
      //       "drift": 0,
      //       "enable": true,
      //       "gravity": {
      //         "acceleration": 15,
      //         "enable": true,
      //         "inverse": true,
      //         "maxSpeed": 100
      //       },
      //       "path": {
      //         "clamp": true,
      //         "delay": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0
      //           },
      //           "value": 0
      //         },
      //         "enable": false,
      //         "options": {}
      //       },
      //       "outModes": {
      //         "default": "destroy",
      //         "bottom": "destroy",
      //         "left": "destroy",
      //         "right": "destroy",
      //         "top": "none"
      //       },
      //       "random": false,
      //       "size": false,
      //       "speed": {
      //         "min": 10,
      //         "max": 20
      //       },
      //       "spin": {
      //         "acceleration": 0,
      //         "enable": false
      //       },
      //       "straight": false,
      //       "trail": {
      //         "enable": true,
      //         "length": 10,
      //         "fillColor": {
      //           "value": "#000"
      //         }
      //       },
      //       "vibrate": false,
      //       "warp": false
      //     },
      //     "number": {
      //       "density": {
      //         "enable": false,
      //         "area": 800,
      //         "factor": 1000
      //       },
      //       "limit": 0,
      //       "value": 0
      //     },
      //     "opacity": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0.1
      //       },
      //       "value": 1,
      //       "animation": {
      //         "count": 0,
      //         "enable": false,
      //         "speed": 2,
      //         "decay": 0,
      //         "sync": false,
      //         "destroy": "none",
      //         "startValue": "random"
      //       }
      //     },
      //     "reduceDuplicates": false,
      //     "repulse": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0
      //       },
      //       "value": 0,
      //       "enabled": false,
      //       "distance": 1,
      //       "duration": 1,
      //       "factor": 1,
      //       "speed": 1
      //     },
      //     "rotate": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0
      //       },
      //       "value": 0,
      //       "animation": {
      //         "enable": false,
      //         "speed": 0,
      //         "decay": 0,
      //         "sync": false
      //       },
      //       "direction": "clockwise",
      //       "path": true
      //     },
      //     "shadow": {
      //       "blur": 0,
      //       "color": {
      //         "value": "#000"
      //       },
      //       "enable": false,
      //       "offset": {
      //         "x": 0,
      //         "y": 0
      //       }
      //     },
      //     "shape": {
      //       "options": {},
      //       "type": "line"
      //     },
      //     "size": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 1
      //       },
      //       "value": {
      //         "min": 0.1,
      //         "max": 50
      //       },
      //       "animation": {
      //         "count": 0,
      //         "enable": true,
      //         "speed": 90,
      //         "decay": 0,
      //         "sync": true,
      //         "destroy": "min",
      //         "startValue": "max"
      //       }
      //     },
      //     "stroke": {
      //       "width": 1,
      //       "color": {
      //         "value": "#ffffff",
      //         "animation": {
      //           "h": {
      //             "count": 0,
      //             "enable": false,
      //             "offset": 0,
      //             "speed": 1,
      //             "decay": 0,
      //             "sync": true
      //           },
      //           "s": {
      //             "count": 0,
      //             "enable": false,
      //             "offset": 0,
      //             "speed": 1,
      //             "decay": 0,
      //             "sync": true
      //           },
      //           "l": {
      //             "count": 0,
      //             "enable": false,
      //             "offset": 0,
      //             "speed": 1,
      //             "decay": 0,
      //             "sync": true
      //           }
      //         }
      //       }
      //     },
      //     "zIndex": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0
      //       },
      //       "value": 0,
      //       "opacityRate": 1,
      //       "sizeRate": 1,
      //       "velocityRate": 1
      //     }
      //   },
      //   "pauseOnBlur": true,
      //   "pauseOnOutsideViewport": true,
      //   "responsive": [],
      //   "style": {},
      //   "themes": [],
      //   "zLayers": 100,
      //   "emitters": {
      //     "autoPlay": true,
      //     "fill": true,
      //     "life": {
      //       "wait": false,
      //       "count": 0,
      //       "delay": 0.1,
      //       "duration": 0.1
      //     },
      //     "rate": {
      //       "quantity": 1,
      //       "delay": 0.5
      //     },
      //     "shape": "square",
      //     "startCount": 0,
      //     "size": {
      //       "mode": "percent",
      //       "height": 0,
      //       "width": 100
      //     },
      //     "direction": "top",
      //     "position": {
      //       "x": 50,
      //       "y": 100
      //     }
      //   }
      // }       // it's amazing, fireworks with different colors on black background
      // const starry = 
      // {
      //   "autoPlay": true,
      //   "background": {
      //     "color": {
      //       "value": "#000"
      //     },
      //     "image": "",
      //     "position": "",
      //     "repeat": "",
      //     "size": "",
      //     "opacity": 1
      //   },
      //   "backgroundMask": {
      //     "composite": "destination-out",
      //     "cover": {
      //       "color": {
      //         "value": "#fff"
      //       },
      //       "opacity": 1
      //     },
      //     "enable": false
      //   },
      //   "fullScreen": {
      //     "enable": true,
      //     "zIndex": -1
      //   },
      //   "detectRetina": true,
      //   "duration": 0,
      //   "fpsLimit": 120,
      //   "interactivity": {
      //     "detectsOn": "window",
      //     "events": {
      //       "onClick": {
      //         "enable": false,
      //         "mode": []
      //       },
      //       "onDiv": {
      //         "selectors": [],
      //         "enable": false,
      //         "mode": [],
      //         "type": "circle"
      //       },
      //       "onHover": {
      //         "enable": false,
      //         "mode": [],
      //         "parallax": {
      //           "enable": false,
      //           "force": 2,
      //           "smooth": 10
      //         }
      //       },
      //       "resize": true
      //     },
      //     "modes": {
      //       "attract": {
      //         "distance": 200,
      //         "duration": 0.4,
      //         "easing": "ease-out-quad",
      //         "factor": 1,
      //         "maxSpeed": 50,
      //         "speed": 1
      //       },
      //       "bounce": {
      //         "distance": 200
      //       },
      //       "bubble": {
      //         "distance": 200,
      //         "duration": 0.4,
      //         "mix": false,
      //         "divs": {
      //           "distance": 200,
      //           "duration": 0.4,
      //           "mix": false,
      //           "selectors": []
      //         }
      //       },
      //       "connect": {
      //         "distance": 80,
      //         "links": {
      //           "opacity": 0.5
      //         },
      //         "radius": 60
      //       },
      //       "grab": {
      //         "distance": 100,
      //         "links": {
      //           "blink": false,
      //           "consent": false,
      //           "opacity": 1
      //         }
      //       },
      //       "light": {
      //         "area": {
      //           "gradient": {
      //             "start": {
      //               "value": "#ffffff"
      //             },
      //             "stop": {
      //               "value": "#000000"
      //             }
      //           },
      //           "radius": 1000
      //         },
      //         "shadow": {
      //           "color": {
      //             "value": "#000000"
      //           },
      //           "length": 2000
      //         }
      //       },
      //       "push": {
      //         "default": true,
      //         "groups": [],
      //         "quantity": 4
      //       },
      //       "remove": {
      //         "quantity": 2
      //       },
      //       "repulse": {
      //         "distance": 200,
      //         "duration": 0.4,
      //         "factor": 100,
      //         "speed": 1,
      //         "maxSpeed": 50,
      //         "easing": "ease-out-quad",
      //         "divs": {
      //           "distance": 200,
      //           "duration": 0.4,
      //           "factor": 100,
      //           "speed": 1,
      //           "maxSpeed": 50,
      //           "easing": "ease-out-quad",
      //           "selectors": []
      //         }
      //       },
      //       "slow": {
      //         "factor": 3,
      //         "radius": 200
      //       },
      //       "trail": {
      //         "delay": 1,
      //         "pauseOnStop": false,
      //         "quantity": 1
      //       }
      //     }
      //   },
      //   "manualParticles": [],
      //   "motion": {
      //     "disable": false,
      //     "reduce": {
      //       "factor": 4,
      //       "value": true
      //     }
      //   },
      //   "particles": {
      //     "bounce": {
      //       "horizontal": {
      //         "random": {
      //           "enable": false,
      //           "minimumValue": 0.1
      //         },
      //         "value": 1
      //       },
      //       "vertical": {
      //         "random": {
      //           "enable": false,
      //           "minimumValue": 0.1
      //         },
      //         "value": 1
      //       }
      //     },
      //     "collisions": {
      //       "bounce": {
      //         "horizontal": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0.1
      //           },
      //           "value": 1
      //         },
      //         "vertical": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0.1
      //           },
      //           "value": 1
      //         }
      //       },
      //       "enable": false,
      //       "mode": "bounce",
      //       "overlap": {
      //         "enable": true,
      //         "retries": 0
      //       }
      //     },
      //     "color": {
      //       "value": "#fff",
      //       "animation": {
      //         "h": {
      //           "count": 0,
      //           "enable": false,
      //           "offset": 0,
      //           "speed": 1,
      //           "decay": 0,
      //           "sync": true
      //         },
      //         "s": {
      //           "count": 0,
      //           "enable": false,
      //           "offset": 0,
      //           "speed": 1,
      //           "decay": 0,
      //           "sync": true
      //         },
      //         "l": {
      //           "count": 0,
      //           "enable": false,
      //           "offset": 0,
      //           "speed": 1,
      //           "decay": 0,
      //           "sync": true
      //         }
      //       }
      //     },
      //     "destroy": {
      //       "mode": "none",
      //       "split": {
      //         "count": 1,
      //         "factor": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0
      //           },
      //           "value": 3
      //         },
      //         "rate": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0
      //           },
      //           "value": {
      //             "min": 4,
      //             "max": 9
      //           }
      //         },
      //         "sizeOffset": true
      //       }
      //     },
      //     "gradient": [],
      //     "groups": {},
      //     "links": {
      //       "blink": false,
      //       "color": {
      //         "value": "#fff"
      //       },
      //       "consent": false,
      //       "distance": 100,
      //       "enable": false,
      //       "frequency": 1,
      //       "opacity": 1,
      //       "shadow": {
      //         "blur": 5,
      //         "color": {
      //           "value": "#000"
      //         },
      //         "enable": false
      //       },
      //       "triangles": {
      //         "enable": false,
      //         "frequency": 1
      //       },
      //       "width": 1,
      //       "warp": false
      //     },
      //     "move": {
      //       "angle": {
      //         "offset": 0,
      //         "value": 90
      //       },
      //       "attract": {
      //         "distance": 200,
      //         "enable": false,
      //         "rotate": {
      //           "x": 3000,
      //           "y": 3000
      //         }
      //       },
      //       "center": {
      //         "x": 50,
      //         "y": 50,
      //         "radius": 0
      //       },
      //       "decay": 0,
      //       "distance": {},
      //       "direction": "none",
      //       "drift": 0,
      //       "enable": false,
      //       "gravity": {
      //         "acceleration": 9.81,
      //         "enable": false,
      //         "inverse": false,
      //         "maxSpeed": 50
      //       },
      //       "path": {
      //         "clamp": true,
      //         "delay": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0
      //           },
      //           "value": 0
      //         },
      //         "enable": false,
      //         "options": {}
      //       },
      //       "outModes": {
      //         "default": "out",
      //         "bottom": "out",
      //         "left": "out",
      //         "right": "out",
      //         "top": "out"
      //       },
      //       "random": false,
      //       "size": false,
      //       "speed": 2,
      //       "spin": {
      //         "acceleration": 0,
      //         "enable": false
      //       },
      //       "straight": false,
      //       "trail": {
      //         "enable": false,
      //         "length": 10,
      //         "fillColor": {
      //           "value": "#000000"
      //         }
      //       },
      //       "vibrate": false,
      //       "warp": false
      //     },
      //     "number": {
      //       "density": {
      //         "enable": true,
      //         "area": 800,
      //         "factor": 1000
      //       },
      //       "limit": 0,
      //       "value": 200
      //     },
      //     "opacity": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0.1
      //       },
      //       "value": {
      //         "min": 0.1,
      //         "max": 1
      //       },
      //       "animation": {
      //         "count": 0,
      //         "enable": true,
      //         "speed": 0.25,
      //         "decay": 0,
      //         "sync": false,
      //         "destroy": "none",
      //         "startValue": "random"
      //       }
      //     },
      //     "reduceDuplicates": false,
      //     "repulse": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0
      //       },
      //       "value": 0,
      //       "enabled": false,
      //       "distance": 1,
      //       "duration": 1,
      //       "factor": 1,
      //       "speed": 1
      //     },
      //     "rotate": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0
      //       },
      //       "value": 0,
      //       "animation": {
      //         "enable": false,
      //         "speed": 0,
      //         "decay": 0,
      //         "sync": false
      //       },
      //       "direction": "clockwise",
      //       "path": false
      //     },
      //     "shadow": {
      //       "blur": 0,
      //       "color": {
      //         "value": "#000"
      //       },
      //       "enable": false,
      //       "offset": {
      //         "x": 0,
      //         "y": 0
      //       }
      //     },
      //     "shape": {
      //       "options": {},
      //       "type": "circle"
      //     },
      //     "size": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 1
      //       },
      //       "value": 1,
      //       "animation": {
      //         "count": 0,
      //         "enable": false,
      //         "speed": 5,
      //         "decay": 0,
      //         "sync": false,
      //         "destroy": "none",
      //         "startValue": "random"
      //       }
      //     },
      //     "stroke": {
      //       "width": 0
      //     },
      //     "zIndex": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0
      //       },
      //       "value": 0,
      //       "opacityRate": 1,
      //       "sizeRate": 1,
      //       "velocityRate": 1
      //     }
      //   },
      //   "pauseOnBlur": true,
      //   "pauseOnOutsideViewport": true,
      //   "responsive": [],
      //   "style": {},
      //   "themes": [],
      //   "zLayers": 100,
      //   "emitters": []
      // }     // it's good // background of space
      // const confetti = 
      // {
      //   "background": {
      //       "color": {
      //           "value": "#000000"
      //       }
      //   },
      //   "fullScreen": {
      //       "enable": true,
      //       "zIndex": -1
      //   },
      //   "particles": {
      //       "bounce": {
      //           "vertical": {
      //               "value": 0
      //           },
      //           "horizontal": {
      //               "value": 0
      //           }
      //       },
      //       "color": {
      //           "value": ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
      //           "animation": {
      //               "enable": true,
      //               "speed": 30
      //           }
      //       },
      //       "move": {
      //           "decay": 0.1,
      //           "direction": "top",
      //           "enable": true,
      //           "gravity": {
      //               "acceleration": 9.81,
      //               "enable": true,
      //               "maxSpeed": 200
      //           },
      //           "outModes": {
      //               "top": "none",
      //               "default": "destroy",
      //               "bottom": "bounce"
      //           },
      //           "speed": {
      //               "min": 50,
      //               "max": 150
      //           }
      //       },
      //       "number": {
      //           "value": 0,    // initial value on opening the page
      //           "limit": 300
      //       },
      //       "opacity": {
      //           "value": 1,
      //           "animation": {
      //               "enable": false,
      //               "startValue": "max",
      //               "destroy": "min",
      //               "speed": 0.3,
      //               "sync": true
      //           }
      //       },
      //       "rotate": {
      //           "value": {
      //               "min": 0,
      //               "max": 360
      //           },
      //           "direction": "random",
      //           "move": true,
      //           "animation": {
      //               "enable": true,
      //               "speed": 60
      //           }
      //       },
      //       "tilt": {
      //           "direction": "random",
      //           "enable": true,
      //           "move": true,
      //           "value": {
      //               "min": 0,
      //               "max": 360
      //           },
      //           "animation": {
      //               "enable": true,
      //               "speed": 60
      //           }
      //       },
      //       "shape": {
      //           "type": ["circle", "square", "polygon", "character", "character", "character"],
      //           "options": {
      //               "polygon": [
      //                   {
      //                       "sides": 5
      //                   },
      //                   {
      //                       "sides": 6
      //                   }
      //               ],
      //               "character": [
      //                   {
      //                       "value": ["💩", "🤡", "🍀", "🍙"]
      //                   }
      //               ]
      //           }
      //       },
      //       "size": {
      //           "value": 3
      //       },
      //       "roll": {
      //           "darken": {
      //               "enable": true,
      //               "value": 30
      //           },
      //           "enlighten": {
      //               "enable": true,
      //               "value": 30
      //           },
      //           "enable": true,
      //           "speed": {
      //               "min": 15,
      //               "max": 25
      //           }
      //       },
      //       "wobble": {
      //           "distance": 30,
      //           "enable": true,
      //           "move": true,
      //           "speed": {
      //               "min": -15,
      //               "max": 15
      //           }
      //       }
      //   },
      //   "emitters": {
      //       "position": {
      //           "x": 50,
      //           "y": 100
      //       },
      //       "size": {
      //           "width": 0,
      //           "height": 0
      //       },
      //       "rate": {
      //           "quantity": 10,
      //           "delay": 0.1
      //       }
      //   }
      // }       // good one //  colorfull pettles are coming out of a anar firecracker at bottom center
      // const sideconfetti = 
      // {
      //   "autoPlay": true,
      //   "fullScreen": {
      //   "enable": true,
      //   "zIndex": -1  
      //   },
      //   "background": {
      //     "color": {
      //       "value": "#000"
      //     },
      //     "image": "",
      //     "position": "",
      //     "repeat": "",
      //     "size": "",
      //     "opacity": 1
      //   },
      //   "backgroundMask": {
      //     "composite": "destination-out",
      //     "cover": {
      //       "color": {
      //         "value": "#fff"
      //       },
      //       "opacity": 1
      //     },
      //     "enable": false
      //   },
      //   "detectRetina": true,
      //   "duration": 0,
      //   "fpsLimit": 120,
      //   "interactivity": {
      //     "detectsOn": "window",
      //     "events": {
      //       "onClick": {
      //         "enable": false,
      //         "mode": []
      //       },
      //       "onDiv": {
      //         "selectors": [],
      //         "enable": false,
      //         "mode": [],
      //         "type": "circle"
      //       },
      //       "onHover": {
      //         "enable": false,
      //         "mode": [],
      //         "parallax": {
      //           "enable": false,
      //           "force": 2,
      //           "smooth": 10
      //         }
      //       },
      //       "resize": true
      //     },
      //     "modes": {
      //       "attract": {
      //         "distance": 200,
      //         "duration": 0.4,
      //         "easing": "ease-out-quad",
      //         "factor": 1,
      //         "maxSpeed": 50,
      //         "speed": 1
      //       },
      //       "bounce": {
      //         "distance": 200
      //       },
      //       "bubble": {
      //         "distance": 200,
      //         "duration": 0.4,
      //         "mix": false,
      //         "divs": {
      //           "distance": 200,
      //           "duration": 0.4,
      //           "mix": false,
      //           "selectors": []
      //         }
      //       },
      //       "connect": {
      //         "distance": 80,
      //         "links": {
      //           "opacity": 0.5
      //         },
      //         "radius": 60
      //       },
      //       "grab": {
      //         "distance": 100,
      //         "links": {
      //           "blink": false,
      //           "consent": false,
      //           "opacity": 1
      //         }
      //       },
      //       "light": {
      //         "area": {
      //           "gradient": {
      //             "start": {
      //               "value": "#ffffff"
      //             },
      //             "stop": {
      //               "value": "#000000"
      //             }
      //           },
      //           "radius": 1000
      //         },
      //         "shadow": {
      //           "color": {
      //             "value": "#000000"
      //           },
      //           "length": 2000
      //         }
      //       },
      //       "push": {
      //         "default": true,
      //         "groups": [],
      //         "quantity": 4
      //       },
      //       "remove": {
      //         "quantity": 2
      //       },
      //       "repulse": {
      //         "distance": 200,
      //         "duration": 0.4,
      //         "factor": 100,
      //         "speed": 1,
      //         "maxSpeed": 50,
      //         "easing": "ease-out-quad",
      //         "divs": {
      //           "distance": 200,
      //           "duration": 0.4,
      //           "factor": 100,
      //           "speed": 1,
      //           "maxSpeed": 50,
      //           "easing": "ease-out-quad",
      //           "selectors": []
      //         }
      //       },
      //       "slow": {
      //         "factor": 3,
      //         "radius": 200
      //       },
      //       "trail": {
      //         "delay": 1,
      //         "pauseOnStop": false,
      //         "quantity": 1
      //       }
      //     }
      //   },
      //   "manualParticles": [],
      //   "motion": {
      //     "disable": false,
      //     "reduce": {
      //       "factor": 4,
      //       "value": true
      //     }
      //   },
      //   "particles": {
      //     "bounce": {
      //       "horizontal": {
      //         "random": {
      //           "enable": false,
      //           "minimumValue": 0.1
      //         },
      //         "value": 1
      //       },
      //       "vertical": {
      //         "random": {
      //           "enable": false,
      //           "minimumValue": 0.1
      //         },
      //         "value": 1
      //       }
      //     },
      //     "collisions": {
      //       "bounce": {
      //         "horizontal": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0.1
      //           },
      //           "value": 1
      //         },
      //         "vertical": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0.1
      //           },
      //           "value": 1
      //         }
      //       },
      //       "enable": false,
      //       "mode": "bounce",
      //       "overlap": {
      //         "enable": true,
      //         "retries": 0
      //       }
      //     },
      //     "color": {
      //       "value": "#ffd700",
      //       "animation": {
      //         "h": {
      //           "count": 0,
      //           "enable": false,
      //           "offset": 0,
      //           "speed": 1,
      //           "decay": 0,
      //           "sync": true
      //         },
      //         "s": {
      //           "count": 0,
      //           "enable": false,
      //           "offset": 0,
      //           "speed": 1,
      //           "decay": 0,
      //           "sync": true
      //         },
      //         "l": {
      //           "count": 0,
      //           "enable": false,
      //           "offset": 0,
      //           "speed": 1,
      //           "decay": 0,
      //           "sync": true
      //         }
      //       }
      //     },
      //     "destroy": {
      //       "mode": "none",
      //       "split": {
      //         "count": 1,
      //         "factor": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0
      //           },
      //           "value": 3
      //         },
      //         "rate": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0
      //           },
      //           "value": {
      //             "min": 4,
      //             "max": 9
      //           }
      //         },
      //         "sizeOffset": true
      //       }
      //     },
      //     "gradient": [],
      //     "groups": {},
      //     "links": {
      //       "blink": false,
      //       "color": {
      //         "value": "#fff"
      //       },
      //       "consent": false,
      //       "distance": 100,
      //       "enable": false,
      //       "frequency": 1,
      //       "opacity": 1,
      //       "shadow": {
      //         "blur": 5,
      //         "color": {
      //           "value": "#000"
      //         },
      //         "enable": false
      //       },
      //       "triangles": {
      //         "enable": false,
      //         "frequency": 1
      //       },
      //       "width": 1,
      //       "warp": false
      //     },
      //     "move": {
      //       "angle": {
      //         "offset": 0,
      //         "value": 90
      //       },
      //       "attract": {
      //         "distance": 200,
      //         "enable": false,
      //         "rotate": {
      //           "x": 3000,
      //           "y": 3000
      //         }
      //       },
      //       "center": {
      //         "x": 50,
      //         "y": 50,
      //         "radius": 0
      //       },
      //       "decay": 0.05,
      //       "distance": {},
      //       "direction": "top",
      //       "drift": 0,
      //       "enable": true,
      //       "gravity": {
      //         "acceleration": 9.81,
      //         "enable": true,
      //         "inverse": false,
      //         "maxSpeed": 50
      //       },
      //       "path": {
      //         "clamp": true,
      //         "delay": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0
      //           },
      //           "value": 0
      //         },
      //         "enable": false,
      //         "options": {}
      //       },
      //       "outModes": {
      //         "default": "destroy",
      //         "bottom": "destroy",
      //         "left": "destroy",
      //         "right": "destroy",
      //         "top": "none"
      //       },
      //       "random": false,
      //       "size": false,
      //       "speed": {
      //         "min": 10,
      //         "max": 50
      //       },
      //       "spin": {
      //         "acceleration": 0,
      //         "enable": false
      //       },
      //       "straight": false,
      //       "trail": {
      //         "enable": false,
      //         "length": 10,
      //         "fillColor": {
      //           "value": "#000000"
      //         }
      //       },
      //       "vibrate": false,
      //       "warp": false
      //     },
      //     "number": {
      //       "density": {
      //         "enable": false,
      //         "area": 800,
      //         "factor": 1000
      //       },
      //       "limit": 0,
      //       "value": 0
      //     },
      //     "opacity": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0.1
      //       },
      //       "value": 1,
      //       "animation": {
      //         "count": 0,
      //         "enable": false,
      //         "speed": 2,
      //         "decay": 0,
      //         "sync": false,
      //         "destroy": "none",
      //         "startValue": "random"
      //       }
      //     },
      //     "reduceDuplicates": false,
      //     "repulse": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0
      //       },
      //       "value": 0,
      //       "enabled": false,
      //       "distance": 1,
      //       "duration": 1,
      //       "factor": 1,
      //       "speed": 1
      //     },
      //     "rotate": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0
      //       },
      //       "value": {
      //         "min": 0,
      //         "max": 360
      //       },
      //       "animation": {
      //         "enable": true,
      //         "speed": 30,
      //         "decay": 0,
      //         "sync": false
      //       },
      //       "direction": "random",
      //       "path": false
      //     },
      //     "shadow": {
      //       "blur": 0,
      //       "color": {
      //         "value": "#000"
      //       },
      //       "enable": false,
      //       "offset": {
      //         "x": 0,
      //         "y": 0
      //       }
      //     },
      //     "shape": {
      //       "options": {},
      //       "type": "triangle"
      //     },
      //     "size": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 1
      //       },
      //       "value": {
      //         "min": 0,
      //         "max": 2
      //       },
      //       "animation": {
      //         "count": 1,
      //         "enable": true,
      //         "speed": 16,
      //         "decay": 0,
      //         "sync": true,
      //         "destroy": "none",
      //         "startValue": "min"
      //       }
      //     },
      //     "stroke": {
      //       "width": 0
      //     },
      //     "zIndex": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0
      //       },
      //       "value": 0,
      //       "opacityRate": 1,
      //       "sizeRate": 1,
      //       "velocityRate": 1
      //     }
      //   },
      //   "pauseOnBlur": true,
      //   "pauseOnOutsideViewport": true,
      //   "responsive": [],
      //   "style": {},
      //   "themes": [],
      //   "zLayers": 100,
      //   "emitters": [
      //     {
      //       "autoPlay": true,
      //       "fill": true,
      //       "life": {
      //         "wait": false
      //       },
      //       "rate": {
      //         "quantity": 5,
      //         "delay": 0.15
      //       },
      //       "shape": "square",
      //       "startCount": 0,
      //       "particles": {
      //         "move": {
      //           "direction": "top-right",
      //           "outModes": {
      //             "top": "none",
      //             "left": "none",
      //             "default": "destroy"
      //           }
      //         }
      //       },
      //       "position": {
      //         "x": 0,
      //         "y": 30
      //       }
      //     },
      //     {
      //       "autoPlay": true,
      //       "fill": true,
      //       "life": {
      //         "wait": false
      //       },
      //       "rate": {
      //         "quantity": 5,
      //         "delay": 0.15
      //       },
      //       "shape": "square",
      //       "startCount": 0,
      //       "particles": {
      //         "move": {
      //           "direction": "top-left",
      //           "outModes": {
      //             "top": "none",
      //             "right": "none",
      //             "default": "destroy"
      //           }
      //         }
      //       },
      //       "position": {
      //         "x": 100,
      //         "y": 30
      //       }
      //     }
      //   ]
      // }      // it's also good, side confetti
      // const confettiexplosions = 
      // {
      //   "autoPlay": true,
      //   "background": {
      //     "color": {
      //       "value": "#000"
      //     },
      //     "image": "",
      //     "position": "",
      //     "repeat": "",
      //     "size": "",
      //     "opacity": 1
      //   },
      //   "backgroundMask": {
      //     "composite": "destination-out",
      //     "cover": {
      //       "color": {
      //         "value": "#fff"
      //       },
      //       "opacity": 1
      //     },
      //     "enable": false
      //   },
      //   "fullScreen": {
      //     "enable": true,
      //     "zIndex": -1
      //   },
      //   "detectRetina": true,
      //   "duration": 0,
      //   "fpsLimit": 120,
      //   "interactivity": {
      //     "detectsOn": "window",
      //     "events": {
      //       "onClick": {
      //         "enable": false,
      //         "mode": []
      //       },
      //       "onDiv": {
      //         "selectors": [],
      //         "enable": false,
      //         "mode": [],
      //         "type": "circle"
      //       },
      //       "onHover": {
      //         "enable": false,
      //         "mode": [],
      //         "parallax": {
      //           "enable": false,
      //           "force": 2,
      //           "smooth": 10
      //         }
      //       },
      //       "resize": true
      //     },
      //     "modes": {
      //       "attract": {
      //         "distance": 200,
      //         "duration": 0.4,
      //         "easing": "ease-out-quad",
      //         "factor": 1,
      //         "maxSpeed": 50,
      //         "speed": 1
      //       },
      //       "bounce": {
      //         "distance": 200
      //       },
      //       "bubble": {
      //         "distance": 200,
      //         "duration": 0.4,
      //         "mix": false,
      //         "divs": {
      //           "distance": 200,
      //           "duration": 0.4,
      //           "mix": false,
      //           "selectors": []
      //         }
      //       },
      //       "connect": {
      //         "distance": 80,
      //         "links": {
      //           "opacity": 0.5
      //         },
      //         "radius": 60
      //       },
      //       "grab": {
      //         "distance": 100,
      //         "links": {
      //           "blink": false,
      //           "consent": false,
      //           "opacity": 1
      //         }
      //       },
      //       "light": {
      //         "area": {
      //           "gradient": {
      //             "start": {
      //               "value": "#ffffff"
      //             },
      //             "stop": {
      //               "value": "#000000"
      //             }
      //           },
      //           "radius": 1000
      //         },
      //         "shadow": {
      //           "color": {
      //             "value": "#000000"
      //           },
      //           "length": 2000
      //         }
      //       },
      //       "push": {
      //         "default": true,
      //         "groups": [],
      //         "quantity": 4
      //       },
      //       "remove": {
      //         "quantity": 2
      //       },
      //       "repulse": {
      //         "distance": 200,
      //         "duration": 0.4,
      //         "factor": 100,
      //         "speed": 1,
      //         "maxSpeed": 50,
      //         "easing": "ease-out-quad",
      //         "divs": {
      //           "distance": 200,
      //           "duration": 0.4,
      //           "factor": 100,
      //           "speed": 1,
      //           "maxSpeed": 50,
      //           "easing": "ease-out-quad",
      //           "selectors": []
      //         }
      //       },
      //       "slow": {
      //         "factor": 3,
      //         "radius": 200
      //       },
      //       "trail": {
      //         "delay": 1,
      //         "pauseOnStop": false,
      //         "quantity": 1
      //       }
      //     }
      //   },
      //   "manualParticles": [],
      //   "motion": {
      //     "disable": false,
      //     "reduce": {
      //       "factor": 4,
      //       "value": true
      //     }
      //   },
      //   "particles": {
      //     "bounce": {
      //       "horizontal": {
      //         "random": {
      //           "enable": false,
      //           "minimumValue": 0.1
      //         },
      //         "value": 1
      //       },
      //       "vertical": {
      //         "random": {
      //           "enable": false,
      //           "minimumValue": 0.1
      //         },
      //         "value": 1
      //       }
      //     },
      //     "collisions": {
      //       "bounce": {
      //         "horizontal": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0.1
      //           },
      //           "value": 1
      //         },
      //         "vertical": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0.1
      //           },
      //           "value": 1
      //         }
      //       },
      //       "enable": false,
      //       "mode": "bounce",
      //       "overlap": {
      //         "enable": true,
      //         "retries": 0
      //       }
      //     },
      //     "color": {
      //       "value": "#00ff00",
      //       "animation": {
      //         "h": {
      //           "count": 0,
      //           "enable": true,
      //           "offset": 0,
      //           "speed": 50,
      //           "decay": 0,
      //           "sync": false
      //         },
      //         "s": {
      //           "count": 0,
      //           "enable": false,
      //           "offset": 0,
      //           "speed": 1,
      //           "decay": 0,
      //           "sync": true
      //         },
      //         "l": {
      //           "count": 0,
      //           "enable": false,
      //           "offset": 0,
      //           "speed": 1,
      //           "decay": 0,
      //           "sync": true
      //         }
      //       }
      //     },
      //     "destroy": {
      //       "mode": "none",
      //       "split": {
      //         "count": 1,
      //         "factor": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0
      //           },
      //           "value": 3
      //         },
      //         "rate": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0
      //           },
      //           "value": {
      //             "min": 4,
      //             "max": 9
      //           }
      //         },
      //         "sizeOffset": true
      //       }
      //     },
      //     "gradient": [],
      //     "groups": {},
      //     "links": {
      //       "blink": false,
      //       "color": {
      //         "value": "#fff"
      //       },
      //       "consent": false,
      //       "distance": 100,
      //       "enable": false,
      //       "frequency": 1,
      //       "opacity": 1,
      //       "shadow": {
      //         "blur": 5,
      //         "color": {
      //           "value": "#000"
      //         },
      //         "enable": false
      //       },
      //       "triangles": {
      //         "enable": false,
      //         "frequency": 1
      //       },
      //       "width": 1,
      //       "warp": false
      //     },
      //     "move": {
      //       "angle": {
      //         "offset": 0,
      //         "value": 90
      //       },
      //       "attract": {
      //         "distance": 200,
      //         "enable": false,
      //         "rotate": {
      //           "x": 3000,
      //           "y": 3000
      //         }
      //       },
      //       "center": {
      //         "x": 50,
      //         "y": 50,
      //         "radius": 0
      //       },
      //       "decay": 0.1,
      //       "distance": {},
      //       "direction": "none",
      //       "drift": 0,
      //       "enable": true,
      //       "gravity": {
      //         "acceleration": 10,
      //         "enable": true,
      //         "inverse": false,
      //         "maxSpeed": 50
      //       },
      //       "path": {
      //         "clamp": true,
      //         "delay": {
      //           "random": {
      //             "enable": false,
      //             "minimumValue": 0
      //           },
      //           "value": 0
      //         },
      //         "enable": false,
      //         "options": {}
      //       },
      //       "outModes": {
      //         "default": "destroy",
      //         "bottom": "destroy",
      //         "left": "destroy",
      //         "right": "destroy",
      //         "top": "none"
      //       },
      //       "random": false,
      //       "size": false,
      //       "speed": {
      //         "min": 10,
      //         "max": 20
      //       },
      //       "spin": {
      //         "acceleration": 0,
      //         "enable": false
      //       },
      //       "straight": false,
      //       "trail": {
      //         "enable": false,
      //         "length": 10,
      //         "fillColor": {
      //           "value": "#000000"
      //         }
      //       },
      //       "vibrate": false,
      //       "warp": false
      //     },
      //     "number": {
      //       "density": {
      //         "enable": false,
      //         "area": 800,
      //         "factor": 1000
      //       },
      //       "limit": 0,
      //       "value": 0
      //     },
      //     "opacity": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0.1
      //       },
      //       "value": {
      //         "min": 0,
      //         "max": 1
      //       },
      //       "animation": {
      //         "count": 0,
      //         "enable": true,
      //         "speed": 2,
      //         "decay": 0,
      //         "sync": false,
      //         "destroy": "min",
      //         "startValue": "max",
      //         "minimumValue": 0
      //       }
      //     },
      //     "reduceDuplicates": false,
      //     "repulse": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0
      //       },
      //       "value": 0,
      //       "enabled": false,
      //       "distance": 1,
      //       "duration": 1,
      //       "factor": 1,
      //       "speed": 1
      //     },
      //     "rotate": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0
      //       },
      //       "value": {
      //         "min": 0,
      //         "max": 360
      //       },
      //       "animation": {
      //         "enable": true,
      //         "speed": 60,
      //         "decay": 0,
      //         "sync": false
      //       },
      //       "direction": "random",
      //       "path": false
      //     },
      //     "shadow": {
      //       "blur": 0,
      //       "color": {
      //         "value": "#000"
      //       },
      //       "enable": false,
      //       "offset": {
      //         "x": 0,
      //         "y": 0
      //       }
      //     },
      //     "shape": {
      //       "options": {},
      //       "type": "square"
      //     },
      //     "size": {
      //       "random": {
      //         "enable": true,
      //         "minimumValue": 2
      //       },
      //       "value": {
      //         "min": 2,
      //         "max": 4
      //       },
      //       "animation": {
      //         "count": 0,
      //         "enable": false,
      //         "speed": 5,
      //         "decay": 0,
      //         "sync": false,
      //         "destroy": "none",
      //         "startValue": "random"
      //       }
      //     },
      //     "stroke": {
      //       "width": 0
      //     },
      //     "zIndex": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0
      //       },
      //       "value": 0,
      //       "opacityRate": 1,
      //       "sizeRate": 1,
      //       "velocityRate": 1
      //     }
      //   },
      //   "pauseOnBlur": true,
      //   "pauseOnOutsideViewport": true,
      //   "responsive": [],
      //   "style": {},
      //   "themes": [],
      //   "zLayers": 100,
      //   "emitters": {
      //     "autoPlay": true,
      //     "fill": true,
      //     "life": {
      //       "wait": false,
      //       "count": 0,
      //       "delay": 0.4,
      //       "duration": 0.1
      //     },
      //     "rate": {
      //       "quantity": 150,
      //       "delay": 0.1
      //     },
      //     "shape": "square",
      //     "startCount": 0,
      //     "size": {
      //       "mode": "percent",
      //       "height": 0,
      //       "width": 0
      //     },
      //     "position": {}
      //   }
      // }      // it's nice // feels like fireworks
      // const snow = 
      // {
      //   "fullScreen": {
      //       "enable": true,
      //       "zIndex": -1
      //   },
      //   "particles": {
      //       "number": {
      //           "value": 400,             // increase the value it looks good
      //           "density": {
      //               "enable": true,
      //               "value_area": 800
      //           }
      //       },
      //       "color": {
      //           "value": "#fff"
      //       },
      //       "shape": {
      //           "type": "circle"
      //       },
      //       "opacity": {
      //           "value": 1,         // default is 0.5
      //           "random": true,
      //           "anim": {
      //               "enable": false,
      //               "speed": 1,
      //               "opacity_min": 0.1,
      //               "sync": false
      //           }
      //       },
      //       "size": {
      //           "value": 2,          //default size is 10 but 1 is better
      //           "random": true,
      //           "anim": {
      //               "enable": false,
      //               "speed": 40,
      //               "size_min": 0.1,
      //               "sync": false
      //           }
      //       },
      //       "line_linked": {
      //           "enable": false,
      //           "distance": 500,
      //           "color": "#ffffff",
      //           "opacity": 0.4,
      //           "width": 2
      //       },
      //       "move": {
      //           "enable": true,
      //           "speed": 1,        //default speed is 2
      //           "direction": "bottom",
      //           "random": false,
      //           "straight": false,
      //           "out_mode": "out",
      //           "attract": {
      //               "enable": false,
      //               "rotateX": 600,
      //               "rotateY": 1200
      //           }
      //       }
      //   },
      //   "interactivity": {
      //       "events": {
      //           "onhover": {
      //               "enable": true,
      //               "mode": "bubble"
      //           },
      //           "onclick": {
      //               "enable": true,
      //               "mode": "repulse"
      //           },
      //           "resize": true
      //       },
      //       "modes": {
      //           "grab": {
      //               "distance": 400,
      //               "line_linked": {
      //                   "opacity": 0.5
      //               }
      //           },
      //           "bubble": {
      //               "distance": 400,
      //               "size": 4,
      //               "duration": 0.3,
      //               "opacity": 1,
      //               "speed": 3
      //           },
      //           "repulse": {
      //               "distance": 200
      //           },
      //           "push": {
      //               "particles_nb": 4
      //           },
      //           "remove": {
      //               "particles_nb": 2
      //           }
      //       }
      //   },
      //   "retina_detect": true,
      //   "background": {
      //       "color": "#000",
      //       "image": "",
      //       "position": "50% 50%",
      //       "repeat": "no-repeat",
      //       "size": "cover"
      //   }
      // }      // it's good // it's like snow, just balls are moving from top to bottom



  return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={ particle }          // just change here the object name for different animations 
        />
  )
}



