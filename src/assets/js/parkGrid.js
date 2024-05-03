jsVectorMap.addMap('parkGrid', {
    "insets": [{
        "width": 700,  // Adjusted width to accommodate wider spaces between columns
        "top": 0,
        "height": 460,  // Adjusted height to accommodate wider spaces between rows
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
        // First row
        'grid_1_1': { path: 'M0 0 L100 0 L100 60 L0 60 Z' },
        'grid_2_1': { path: 'M0 90 L100 90 L100 150 L0 150 Z' },
        'grid_3_1': { path: 'M0 180 L100 180 L100 240 L0 240 Z' },
        'grid_4_1': { path: 'M0 270 L100 270 L100 330 L0 330 Z' },
        'grid_5_1': { path: 'M0 360 L100 360 L100 420 L0 420 Z' },
        'grid_6_1': { path: 'M0 450 L100 450 L100 510 L0 510 Z' },

        // Second column
        'grid_1_2': { path: 'M130 0 L230 0 L230 60 L130 60 Z' },
        'grid_2_2': { path: 'M130 90 L230 90 L230 150 L130 150 Z' },
        'grid_3_2': { path: 'M130 180 L230 180 L230 240 L130 240 Z' },
        'grid_4_2': { path: 'M130 270 L230 270 L230 330 L130 330 Z' },
        'grid_5_2': { path: 'M130 360 L230 360 L230 420 L130 420 Z' },
        'grid_6_2': { path: 'M130 450 L230 450 L230 510 L130 510 Z' },

        // Third column
        'grid_1_3': { path: 'M260 0 L360 0 L360 60 L260 60 Z' },
        'grid_2_3': { path: 'M260 90 L360 90 L360 150 L260 150 Z' },
        'grid_3_3': { path: 'M260 180 L360 180 L360 240 L260 240 Z' },
        'grid_4_3': { path: 'M260 270 L360 270 L360 330 L260 330 Z' },
        'grid_5_3': { path: 'M260 360 L360 360 L360 420 L260 420 Z' },
        'grid_6_3': { path: 'M260 450 L360 450 L360 510 L260 510 Z' },

        // Fourth column
        'grid_1_4': { path: 'M390 0 L490 0 L490 60 L390 60 Z' },
        'grid_2_4': { path: 'M390 90 L490 90 L490 150 L390 150 Z' },
        'grid_3_4': { path: 'M390 180 L490 180 L490 240 L390 240 Z' },
        'grid_4_4': { path: 'M390 270 L490 270 L490 330 L390 330 Z' },
        'grid_5_4': { path: 'M390 360 L490 360 L490 420 L390 420 Z' },
        'grid_6_4': { path: 'M390 450 L490 450 L490 510 L390 510 Z' },

        // Fifth column
        'grid_1_5': { path: 'M520 0 L620 0 L620 60 L520 60 Z' },
        'grid_2_5': { path: 'M520 90 L620 90 L620 150 L520 150 Z' },
        'grid_3_5': { path: 'M520 180 L620 180 L620 240 L520 240 Z' },
        'grid_4_5': { path: 'M520 270 L620 270 L620 330 L520 330 Z' },
        'grid_5_5': { path: 'M520 360 L620 360 L620 420 L520 420 Z' },
        'grid_6_5': { path: 'M520 450 L620 450 L620 510 L520 510 Z' },
    }
});