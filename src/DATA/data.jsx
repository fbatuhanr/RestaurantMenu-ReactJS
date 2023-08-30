import Logo from '../assets/images/logo.png';

export const General = {
    title: 'LUNCH',
    logoUrl: Logo
}

export const MenuCategories = {

    'sandwiches':{
        info: {
            title: 'SANDWICHES',
            description: 'Served with Perfectly Seasoned Fries.'
        },
        items: [
            {
                title: '* SPECIAL BURGER',
                description: 'An 8-ounce fresh beef patty accompanied by American cheese is presented on a brioche bun, complemented by a special sauce, shredded lettuce, sliced onions, tomato, and sliced pickle.',
                price: 16
            },
            {
                title: '* LOBSTER ROLL',
                description: 'The warm Maine lobster is presented in a manner that is accompanied by drawn butter and Old Bay aioli. It is served on a split-top brioche bun.',
                price: 30
            },
            {
                title: 'FRIED CHICKEN',
                description: 'Hand-breaded chicken breast strips are presented on a brioche bun, accompanied by avocado puree and zippy sauce, as well as shredded lettuce, tomatoes, bacon, onions, and sliced pickles.',
                price: 14
            },
            {
                title: 'SHRIMP',
                description: 'The dish comprises of Gulf Fresh Shrimp, served on a Hoagie Roll, accompanied by Remoulade, Shredded Lettuce, Tomato, and Sliced Pickles.',
                price: 18
            },
            {
                title: 'SOUTHERN FRIED FISH',
                description: 'The dish comprises of Gulf Fresh Shrimp, served on a Hoagie Roll, accompanied by Remoulade, Shredded Lettuce, Tomato, and Sliced Pickles.',
                price: 20
            },
            {
                title: 'FANTASTIC BURGER',
                description: 'The dish comprises of 8 ounces of Wagyu beef, accompanied by Burrata, fire roasted tomatoes, arugula, pickled red onion, and house-made pesto, all served on a Brioche bun. The meal is served with a side of fries. To fully appreciate the flavors of this dish, the chef recommends ordering it cooked to a medium-rare temperature.',
                price: 26
            }
        ]
    },
    'specialties':{
        info: {
            title: 'SPECIALTIES'
        },
        items: [
            {
                title: '* STEAK FRITES',
                description: '8 oz Top Sirloin Steak and Chimichurri with Perfectly Seasoned Fries.',
                price: 24
            },
            {
                title: 'LAMB LOLLIPOPS',
                description: 'Grilled Lamb Lollipops with Green Harissa, Tahini Sauce, and Red Pepper Coulis Served with Crispy Fried Red Potatoes.',
                price: 32
            },
            {
                title: 'MUSSELS',
                description: 'One Pound Mussels, Conecuh Sausage, Tomato Broth, Cippolini Onions, Crushed Aleppo Pepper. Served with Ciabatta Bread.',
                price: 28
            },
            {
                title: 'MEDITERRANEAN CHICKEN',
                description: 'Roasted Chicken Breast with Mediterranean Couscous and Red Pepper Coulis.',
                price: 24
            },
            {
                title: 'PAN-SEARED SALMON',
                description: 'Crispy Skinned Salmon in a Mandarin Glaze with Glass Noodles, Pineapple, Cucumber, Pickled Fresno, and Shaved Almond.',
                price: 27
            },
            {
                title: 'BLACKENED COBIA',
                description: 'Blackened Gulf Cobia Served Over Classic Dirty Rice with Our House Special Crawfish and Conecuh Sausage Cream Gravy.',
                price: 30
            }
        ]
    },
    'kids-meal': {
        info: {
            title: 'KIDS MEAL',
            description: 'Served with Our Perfectly Seasoned Fries. 12 and Under Only.'
        },
        items: [
            {
                title: 'CHEESEBURGER',
                description: 'Burger with White American Cheese.',
                price: 10
            },
            {
                title: 'CHICKEN STRIPS',
                description: 'Hand-Breaded Chicken Breast Strips.',
                price: 10
            },
            {
                title: 'FRIED SHRIMP',
                description: 'Hand-Breaded Gulf Shrimp.',
                price: 10
            }
        ]
    },

    'cocktails':{
        info: {
            title: 'COCKTAILS'
        },
        items: [
            {
                title: 'APEROL SPRITZ',
                description: 'Aperol, La Marca Prosecco, Club Soda, Orange',
                price: 12
            },
            {
                title: 'LADY',
                description: 'Absolut Vodka, Limoncello, Lemon Juice, La Croix Peach',
                price: 12
            },
            {
                title: 'MISS GINGER',
                description: 'Tito\'s Vodka, Fresh Rosemary, Ginger Beer, Lime Juice',
                price: 11
            },
            {
                title: 'CLASS ACT',
                description: 'Hendrick\'s Gin, Cucumber, Ginger, Fresh Mint, Lemon Juice, Sparkling Water',
                price: 12
            },
            {
                title: 'ISLAND GIRL',
                description: 'Empress Gin, Lemon Juice, Elderflower, Orange Bitters',
                price: 13
            },
            {
                title: 'SEAHUNTER MAI TAI',
                description: 'Cruzan Light Rum, Myers Rum, Orange Liqueur, Lime Juice, Pineapple Juice, Orgeat Almond Syrup',
                price: 11
            },
            {
                title: 'RIP TIDE',
                description: 'Malibu Coconut Rum, Peach Schnapps, Pineapple Juice, Cranberry Juice',
                price: 11
            },
            {
                title: 'PEACH HIGHBALL',
                description: 'Jim Beam Peach Whiskey, Fresh Extra Carbonated Club Soda, Splash of Lemon Juice',
                price: 10
            },
            {
                title: 'SPICY PALOMA',
                description: 'Altos Silver Tequila, Fresh Lime, Agave, Ruby Red Grapefruit Juice, Sliced Jalapeños, Tajin Rim',
                price: 13
            },
            {
                title: 'LEGACY OLD FASHIONED',
                description: 'Clyde May\'s 110 pr. Alabama Bourbon, Demerara Syrup, Angostura Bitters, Orange Zest',
                price: 13
            },
            {
                title: 'ESPRESSO MARTINI',
                description: 'Absolut Elyx Vodka, Espresso, Coffee Liqueur',
                price: 14
            }
        ]
    },
    'brews':{
        info: {
            title: 'BREWS'
        },
        items: [
            {
                title: 'BUSCH LIGHT',
                price: 3
            },
            {
                title: 'MILLER LITE',
                price: 4
            },
            {
                title: 'COORS LIGHT',
                price: 4
            },
            {
                title: 'BUD LIGHT',
                price: 5
            },
            {
                title: 'MICHELOB ULTRA',
                price: 5
            },
            {
                title: 'YUENGLING',
                price: 5
            },
            {
                title: 'CORONA EXTRA',
                price: 6
            },
            {
                title: 'CORONA PREMIER',
                price: 6
            },
            {
                title: 'LIL SMACK IPA',
                price: 6
            },
            {
                title: 'GOAT ISLAND BLOOD ORANGE WHEAT ALE',
                price: 6
            },
            {
                title: 'SIERRA NEVADA IPA',
                price: 6
            },
            {
                title: 'HEINEKEN 00 (NA)',
                price: 5
            }
        ]
    },
    'wines':{
        info: {
            title: 'WINES'
        },
        items: [
            {
                title: 'Talbott Kall Hart, Monterey CA.',
                description: 'Pinot Noir',
                price: '15 | 55'
            },
            {
                title: 'Jackson Estate, Anderson Valley, CA.',
                description: 'Pinot Noir',
                price: 60
            },
            {
                title: 'Gran Moraine, Yamhill-Carlton, OR.',
                description: 'Pinot Noir',
                price: 80
            },
            {
                title: 'Frei Brothers Dry Creek Valley, CA.',
                description: 'Merlot',
                price: '12 | 45'
            },
            {
                title: 'Franciscan Select',
                description: 'Cabernet Sauvignon',
                price: '11 | 40'
            },
            {
                title: 'Louis Martini, Napa Valley CA.',
                description: 'Cabernet Sauvignon',
                price: 80
            },
            {
                title: 'DaVinci Chianti Riserva, Tuscany, Italy',
                description: 'Chianti',
                price: 48
            },
            {
                title: 'Mount Peak Rattlesnake, Monte Rosso, CA.',
                description: 'Zinfandel',
                price: 70
            },
            {
                title: 'Orin Swift Abstract, California',
                description: 'Red Blend',
                price: 65
            },
            {
                title: 'Overture by Opus One, Napa Valley',
                description: 'Red Blend',
                price: 225
            },
            {
                title: 'Opus One, Napa Valley',
                description: 'Red Blend 2018',
                price: 495
            }
        ]
    }
}