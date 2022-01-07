class analogClock {
    constructor(area, settings){
        this.area = area;
        this.settings = settings;
    }

    run(){
        var that = this;
        loadScript(moduleFile('/analogClock/js/jquery.thooClock.js'), function() {
            var dialBackgroundColor = that.settings.dialBackgroundColor;
            if(that.settings.dialBackgroundColorTransparent < 100){
                if(that.settings.dialBackgroundColorTransparent == 0){
                    dialBackgroundColor = 'transparent';
                }else{
                    var {r, g, b} = that.hexToRgb(that.settings.dialBackgroundColor);

                    var tr = that.settings.dialBackgroundColorTransparent/100;

                    dialBackgroundColor = 'rgba('+r+', '+g+', '+b+', '+tr+')';
                }
                
            }

            var settings = {
                size: that.area.height(),
                dialColor: that.settings.dialColor,
                dialBackgroundColor: dialBackgroundColor,
                secondHandColor: that.settings.secondHandColor,
                minuteHandColor: that.settings.minuteHandColor,
                hourHandColor: that.settings.hourHandColor,

                sweepingMinutes: true,
                sweepingSeconds: true,

                showNumerals: that.settings.showNumerals,
                numerals: [
                    {1: that.settings.numbers1},
                    {2: that.settings.numbers2},
                    {3: that.settings.numbers3},
                    {4: that.settings.numbers4},
                    {5: that.settings.numbers5},
                    {6: that.settings.numbers6},
                    {7: that.settings.numbers7},
                    {8: that.settings.numbers8},
                    {9: that.settings.numbers9},
                    {10: that.settings.numbers10},
                    {11: that.settings.numbers11},
                    {12: that.settings.numbers12}
                ],

                brandText: that.settings.brandText,
                brandText2: that.settings.brandText2,
            };

            that.area.thooClock(settings);
         });

        return;

    }

    destroy(){
        
    }

    hexToRgb(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
          return r + r + g + g + b + b;
        });
      
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      }
}