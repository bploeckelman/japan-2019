$(function () {
  $("#nanogallery2").nanogallery2({
    itemsBaseURL:    "http://localhost:8000/images/albums/shirakawa-go/",

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
        { src: "IMG_20191031_151121.jpg", srct: "thumbs/IMG_20191031_151121.png", title: "" }
      , { src: "IMG_20191031_151131.jpg", srct: "thumbs/IMG_20191031_151131.png", title: "" }
      , { src: "IMG_20191031_151251.jpg", srct: "thumbs/IMG_20191031_151251.png", title: "" }
      , { src: "IMG_20191031_151520.jpg", srct: "thumbs/IMG_20191031_151520.png", title: "" }
      , { src: "IMG_20191031_151843.jpg", srct: "thumbs/IMG_20191031_151843.png", title: "" }
      , { src: "IMG_20191031_153239.jpg", srct: "thumbs/IMG_20191031_153239.png", title: "" }
      , { src: "IMG_20191031_155458.jpg", srct: "thumbs/IMG_20191031_155458.png", title: "" }
      , { src: "IMG_20191031_163551.jpg", srct: "thumbs/IMG_20191031_163551.png", title: "" }
      , { src: "IMG_20191031_164000.jpg", srct: "thumbs/IMG_20191031_164000.png", title: "" }
      , { src: "IMG_20191031_165726.jpg", srct: "thumbs/IMG_20191031_165726.png", title: "" }
      , { src: "IMG_20191031_172242.jpg", srct: "thumbs/IMG_20191031_172242.png", title: "" }
      , { src: "IMG_20191031_172422.jpg", srct: "thumbs/IMG_20191031_172422.png", title: "" }
      , { src: "IMG_20191101_080931.jpg", srct: "thumbs/IMG_20191101_080931.png", title: "" }
      , { src: "IMG_20191101_081732.jpg", srct: "thumbs/IMG_20191101_081732.png", title: "" }
      , { src: "IMG_20191101_083932.jpg", srct: "thumbs/IMG_20191101_083932.png", title: "" }
      , { src: "IMG_20191101_094220.jpg", srct: "thumbs/IMG_20191101_094220.png", title: "" }
      , { src: "IMG_20191101_094701.jpg", srct: "thumbs/IMG_20191101_094701.png", title: "" }
      , { src: "IMG_20191101_100029.jpg", srct: "thumbs/IMG_20191101_100029.png", title: "" }
      , { src: "IMG_20191101_101805~2.jpg", srct: "thumbs/IMG_20191101_101805~2.png", title: "" }
      , { src: "IMG_20191101_104525.jpg", srct: "thumbs/IMG_20191101_104525.png", title: "" }
      , { src: "IMG_20191101_104715~2.jpg", srct: "thumbs/IMG_20191101_104715~2.png", title: "" }
      , { src: "IMG_20191101_105613.jpg", srct: "thumbs/IMG_20191101_105613.png", title: "" }
      , { src: "IMG_20191101_122703.jpg", srct: "thumbs/IMG_20191101_122703.png", title: "" }
      , { src: "IMG_20191101_124638.jpg", srct: "thumbs/IMG_20191101_124638.png", title: "" }
    ]
  })
});
