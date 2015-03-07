Positioned grid
===
**Less mixin** for generating fluid grid based on square cells.
Position and size of certain cell can be controlled with css classes:

 - x[i] - position on x axis 
 - y[i] - position on y axis (down)
 - w[i] - cell width multiplier
 - h[i] - cell height multiplier

Ex: `<div class="x0 y2 w1 h2"> </div>`

**Usage**
In your .less file:

    @import (reference) "_mixins.less";
    @import (reference) "_positioned-grid.less"; 
    
    .your-wrapper-selector{ 
    	.positioned-grid(4, 3);	//generates 4x3 grid styles
    }
    
In html file:

	<div class="your-wrapper-selector">
	    <div class="cell h2 y1"></div>
		<div class="cell w2 h2 x2 y1"></div>
		<div class="cell x1 y1"><div class="inner-content">cell content</div></div>
		<div class="cell x1 y2"></div>
	</div>