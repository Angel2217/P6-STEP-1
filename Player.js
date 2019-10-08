export class Player {
    constructor(name, image, points, weapon) {
      this.name = name;
      this.image = image;
      this.points = points;
      this.weapon = weapon;
    
  
  
      let myDiv = $('#' + name); 
      if (myDiv.length === 0) {
        this.elem = this._createElem(); 
      } else {
        this.elem = myDiv[0]; 
      }
  
    }

  
    _createElem() {
      let elem = $('<div>')
        .attr('id', this.name)
        .addClass('player')
        .append('<div class="player-name">' + this.name + '</div>')
        .append('<div class="player-image">' + `<img src = images/${this.image}>` + '</div>')
        
      return elem
    }
    
    
    get playing() {
        let elem = $('#' + this.name);
        return $(elem).hasClass('playing');
    }

    set playing(bool) {
        let elem = $('#' + this.name);
        if (bool) {
            $(elem).addClass('playing');
        } else {
            $(elem).removeClass('playing');
        }
    }

    
  } 
