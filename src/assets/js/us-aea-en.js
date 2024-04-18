jsVectorMap.addMap('parkGrid', {
    "insets": [{
        "width": 900,  // Updated to accommodate more rectangles per row
        "top": 0,
        "height": 700,  // Height stays the same
        "left": 0,
        "bbox": [{
            "y": 0,
            "x": 0
        }, {
            "y": 100,
            "x": 100
        }]
    }],
    "paths": {
        // First row of rectangles
        'grid_1_1': { path: 'M0 0 L110 0 L110 60 L0 60 Z' },
        'grid_1_2': { path: 'M120 0 L230 0 L230 60 L120 60 Z' },
        'grid_1_3': { path: 'M240 0 L350 0 L350 60 L240 60 Z' },
        'grid_1_4': { path: 'M360 0 L470 0 L470 60 L360 60 Z' },
        'grid_1_5': { path: 'M480 0 L590 0 L590 60 L480 60 Z' },
        'grid_1_6': { path: 'M600 0 L710 0 L710 60 L600 60 Z' },
        'grid_1_7': { path: 'M720 0 L830 0 L830 60 L720 60 Z' },
        'grid_1_8': { path: 'M840 0 L950 0 L950 60 L840 60 Z' },

        // Separator line after the first row
        'separator_1': { path: 'M0 70 L950 70' },

        // Second row of rectangles
        'grid_2_1': { path: 'M0 80 L110 80 L110 140 L0 140 Z' },
        'grid_2_2': { path: 'M120 80 L230 80 L230 140 L120 140 Z' },
        'grid_2_3': { path: 'M240 80 L350 80 L350 140 L240 140 Z' },
        'grid_2_4': { path: 'M360 80 L470 80 L470 140 L360 140 Z' },
        'grid_2_5': { path: 'M480 80 L590 80 L590 140 L480 140 Z' },
        'grid_2_6': { path: 'M600 80 L710 80 L710 140 L600 140 Z' },
        'grid_2_7': { path: 'M720 80 L830 80 L830 140 L720 140 Z' },
        'grid_2_8': { path: 'M840 80 L950 80 L950 140 L840 140 Z' },

        // Separator line after the second row
        // 'separator_2': { path: 'M0 150 L950 150' },

       
    },
    // "width": 950,  // Width updated to accommodate the larger number of rectangles
    // "height": 800
});
