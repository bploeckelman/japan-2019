$(function () {
  $("#nanogallery2").nanogallery2({
    itemsBaseURL:    "http://localhost:8000/images/album/",

    // thumbnail settings
    thumbnailHeight: 200,
    thumbnailWidth:  200,
    thumbnailDisplayOrder: 'random',
    thumbnailAlignment: 'scaled',
    thumbnailGutterWidth: 0, thumbnailGutterHeight: 0,
    thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,
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
    gallerySorting: 'random',
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
      topRight:  'shareButton, rotateLeft, rotateRight, fullscreenButton, closeButton'
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
    ]
  })
});
