
export class Panel {
    constructor(id, player) {
        this.id = id;
        this.player = player;
        this._createPanel();
    }
  
 
    _createPanel() {
        let panel = $('<div>')
          .appendTo('#myApp')  
          .attr('id', this.id)
          .addClass('panel')
          .append('<div class="panel-name">' + this.player.name + '</div>')
          .append('<div class="panel-image">' + `<img src = images/${this.player.image}>` + '</div>')
          .append('<div class="life-points">' + 100 + '</div>')
    
        return panel
      }
    
    
    
  } 