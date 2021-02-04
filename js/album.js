$(function () {
  $("#nanogallery2").nanogallery2({
    itemsBaseURL:    "http://localhost:8000/images/album/",

    // thumbnail settings
    thumbnailHeight: 200,
    thumbnailWidth:  200,
    thumbnailDisplayOrder: 'random',
    thumbnailAlignment: 'scaled',
    thumbnailGutterWidth: 10, thumbnailGutterHeight: 10,
    thumbnailBorderHorizontal: 1, thumbnailBorderVertical: 1,
    thumbnailToolbarImage: null,
    thumbnailToolbarAlbum: null,
    thumbnailLabel: { display: false },
    thumbnailDisplayTransition: 'imageSlideUp',
    thumbnailDisplayTransitionDuration: 1200,
    thumbnailDisplayTransitionEasing: 'easeInOutQuint',
    thumbnailDisplayInterval: 60,
    thumbnailBuildInit2: 'image_scale_1.15',
    thumbnailHoverEffect2: 'thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00',
    touchAnimation: true,
    touchAutoOpenDelay: 500,

    // gallery settings
    galleryMaxRows: 1,
    galleryDisplayMode: 'rows',
    // gallerySorting: 'titleAsc',
    galleryDisplayTransitionDuration: 1500,
    galleryTheme : {
      thumbnail: { background: 'silver' },
    },
    galleryMosaic : [                       // default layout
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 4, r: 1 },
      { w: 2, h: 1, c: 5, r: 1 },
      { w: 2, h: 2, c: 5, r: 2 },
      { w: 1, h: 1, c: 4, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 2, h: 1, c: 3, r: 4 },
      { w: 1, h: 1, c: 5, r: 4 },
      { w: 1, h: 1, c: 6, r: 4 }
    ],

    // lightbox
    viewerToolbar: { display: false },
    viewerTools:    {
      topLeft:   'label',
      topRight:  'rotateLeft, rotateRight, fullscreenButton, closeButton'
    },

    // content items
    items: [
        { src: "0 - shirogane blue pond - 1.jpg", srct: "thumbs/0 - shirogane blue pond - 1.png", title: "Shirogane Blue Pond" }
      , { src: "1 - shirogane blue pond - 2.jpg", srct: "thumbs/1 - shirogane blue pond - 2.png", title: "Shirogane Blue Pond" }
      , { src: "2 - shirahige waterfall.jpg",     srct: "thumbs/2 - shirahige waterfall.png",     title: "Shirahige Waterfall" }
      , { src: "shrine - 1.jpg", srct: "thumbs/shrine - 1.png", title: "Forest shrine" }
      , { src: "shrine - 2.jpg", srct: "thumbs/shrine - 2.png", title: "Forest shrine" }
      , { src: "shrine - 3.jpg", srct: "thumbs/shrine - 3.png", title: "Forest shrine" }
      , { src: "shrine - 4.jpg", srct: "thumbs/shrine - 4.png", title: "Forest shrine" }
      , { src: "shrine - 5.jpg", srct: "thumbs/shrine - 5.png", title: "Forest shrine" }
      , { src: "shrine - 6.jpg", srct: "thumbs/shrine - 6.png", title: "Forest shrine" }
      , { src: "shrine - 7.jpg", srct: "thumbs/shrine - 7.png", title: "Forest shrine" }

      , { src: "IMG_20191018_122511.jpg", srct: "thumbs/IMG_20191018_122511.png", title: "" }
      , { src: "IMG_20191018_133403.jpg", srct: "thumbs/IMG_20191018_133403.png", title: "" }
      , { src: "IMG_20191018_135136.jpg", srct: "thumbs/IMG_20191018_135136.png", title: "" }
      , { src: "IMG_20191018_145222.jpg", srct: "thumbs/IMG_20191018_145222.png", title: "" }
      , { src: "IMG_20191018_151248.jpg", srct: "thumbs/IMG_20191018_151248.png", title: "" }
      , { src: "IMG_20191018_155104.jpg", srct: "thumbs/IMG_20191018_155104.png", title: "" }
      , { src: "IMG_20191019_081345.jpg", srct: "thumbs/IMG_20191019_081345.png", title: "" }
      , { src: "IMG_20191019_092709.jpg", srct: "thumbs/IMG_20191019_092709.png", title: "" }
      , { src: "IMG_20191019_122308.jpg", srct: "thumbs/IMG_20191019_122308.png", title: "" }
      , { src: "IMG_20191019_134643.jpg", srct: "thumbs/IMG_20191019_134643.png", title: "" }
      , { src: "IMG_20191019_142053.jpg", srct: "thumbs/IMG_20191019_142053.png", title: "" }
      , { src: "IMG_20191020_110426.jpg", srct: "thumbs/IMG_20191020_110426.png", title: "" }
      , { src: "IMG_20191020_113724.jpg", srct: "thumbs/IMG_20191020_113724.png", title: "" }
      , { src: "IMG_20191020_123343.jpg", srct: "thumbs/IMG_20191020_123343.png", title: "" }
      , { src: "IMG_20191020_130104.jpg", srct: "thumbs/IMG_20191020_130104.png", title: "" }
      , { src: "IMG_20191020_145757.jpg", srct: "thumbs/IMG_20191020_145757.png", title: "" }
      , { src: "IMG_20191021_093138.jpg", srct: "thumbs/IMG_20191021_093138.png", title: "" }
      , { src: "IMG_20191021_094828.jpg", srct: "thumbs/IMG_20191021_094828.png", title: "" }
      , { src: "IMG_20191021_100614.jpg", srct: "thumbs/IMG_20191021_100614.png", title: "" }
      , { src: "IMG_20191021_101746.jpg", srct: "thumbs/IMG_20191021_101746.png", title: "" }
      , { src: "IMG_20191021_105507.jpg", srct: "thumbs/IMG_20191021_105507.png", title: "" }
      , { src: "IMG_20191021_182130.jpg", srct: "thumbs/IMG_20191021_182130.png", title: "" }
      , { src: "IMG_20191022_090833.jpg", srct: "thumbs/IMG_20191022_090833.png", title: "" }
      , { src: "IMG_20191022_114135.jpg", srct: "thumbs/IMG_20191022_114135.png", title: "" }
      , { src: "IMG_20191022_115512.jpg", srct: "thumbs/IMG_20191022_115512.png", title: "" }
      , { src: "IMG_20191022_125725.jpg", srct: "thumbs/IMG_20191022_125725.png", title: "" }
      , { src: "IMG_20191022_135509~2.jpg", srct: "thumbs/IMG_20191022_135509~2.png", title: "" }
      , { src: "IMG_20191022_140339.jpg", srct: "thumbs/IMG_20191022_140339.png", title: "" }
      , { src: "IMG_20191022_152202.jpg", srct: "thumbs/IMG_20191022_152202.png", title: "" }
      , { src: "IMG_20191022_181616~2.jpg", srct: "thumbs/IMG_20191022_181616~2.png", title: "" }
      , { src: "IMG_20191023_151431.jpg", srct: "thumbs/IMG_20191023_151431.png", title: "" }
      , { src: "IMG_20191024_115800.jpg", srct: "thumbs/IMG_20191024_115800.png", title: "" }
      , { src: "IMG_20191024_131215.jpg", srct: "thumbs/IMG_20191024_131215.png", title: "" }
      , { src: "IMG_20191024_131425~2.jpg", srct: "thumbs/IMG_20191024_131425~2.png", title: "" }
      , { src: "IMG_20191024_133324.jpg", srct: "thumbs/IMG_20191024_133324.png", title: "" }
      , { src: "IMG_20191024_134019.jpg", srct: "thumbs/IMG_20191024_134019.png", title: "" }
      , { src: "IMG_20191024_145338.jpg", srct: "thumbs/IMG_20191024_145338.png", title: "" }
      , { src: "IMG_20191024_150331.jpg", srct: "thumbs/IMG_20191024_150331.png", title: "" }
      , { src: "IMG_20191025_105345.jpg", srct: "thumbs/IMG_20191025_105345.png", title: "" }
      , { src: "IMG_20191025_132419.jpg", srct: "thumbs/IMG_20191025_132419.png", title: "" }
      , { src: "IMG_20191025_141039.jpg", srct: "thumbs/IMG_20191025_141039.png", title: "" }
      , { src: "IMG_20191025_152523.jpg", srct: "thumbs/IMG_20191025_152523.png", title: "" }
      , { src: "IMG_20191025_153518.jpg", srct: "thumbs/IMG_20191025_153518.png", title: "" }
      , { src: "IMG_20191025_162900.jpg", srct: "thumbs/IMG_20191025_162900.png", title: "" }
    ]
  })
});
