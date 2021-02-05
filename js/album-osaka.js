$(function () {
  $("#nanogallery2").nanogallery2({
    itemsBaseURL:    "http://localhost:8000/images/albums/osaka/",

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
      // osaka

        { src: "IMG_20191026_170447.jpg", srct: "thumbs/IMG_20191026_170447.png", tags: "osaka", title: "" }
      , { src: "IMG_20191026_171145.jpg", srct: "thumbs/IMG_20191026_171145.png", tags: "osaka", title: "" }
      , { src: "IMG_20191026_194652.jpg", srct: "thumbs/IMG_20191026_194652.png", tags: "osaka", title: "" }
      , { src: "IMG_20191027_101713.jpg", srct: "thumbs/IMG_20191027_101713.png", tags: "osaka", title: "" }
      , { src: "IMG_20191027_103535.jpg", srct: "thumbs/IMG_20191027_103535.png", tags: "osaka", title: "" }
      , { src: "IMG_20191027_104020.jpg", srct: "thumbs/IMG_20191027_104020.png", tags: "osaka", title: "" }
      , { src: "IMG_20191027_123911.jpg", srct: "thumbs/IMG_20191027_123911.png", tags: "osaka", title: "" }
      , { src: "IMG_20191027_131317.jpg", srct: "thumbs/IMG_20191027_131317.png", tags: "osaka", title: "" }
      , { src: "IMG_20191027_144412.jpg", srct: "thumbs/IMG_20191027_144412.png", tags: "osaka", title: "" }
      , { src: "IMG_20191027_144719.jpg", srct: "thumbs/IMG_20191027_144719.png", tags: "osaka", title: "" }
      , { src: "IMG_20191027_144809.jpg", srct: "thumbs/IMG_20191027_144809.png", tags: "osaka", title: "" }
      , { src: "IMG_20191027_152356.jpg", srct: "thumbs/IMG_20191027_152356.png", tags: "osaka", title: "" }
      , { src: "IMG_20191027_152447.jpg", srct: "thumbs/IMG_20191027_152447.png", tags: "osaka", title: "" }
      , { src: "IMG_20191027_173332.jpg", srct: "thumbs/IMG_20191027_173332.png", tags: "osaka", title: "" }
      , { src: "IMG_20191027_174422.jpg", srct: "thumbs/IMG_20191027_174422.png", tags: "osaka", title: "" }
      , { src: "IMG_20191027_185104.jpg", srct: "thumbs/IMG_20191027_185104.png", tags: "osaka", title: "" }
      , { src: "IMG_20191027_193029.jpg", srct: "thumbs/IMG_20191027_193029.png", tags: "osaka", title: "" }

      // arashiyama & nara

      , { src: "IMG_20191028_104620.jpg", srct: "thumbs/IMG_20191028_104620.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_112027.jpg", srct: "thumbs/IMG_20191028_112027.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_112658.jpg", srct: "thumbs/IMG_20191028_112658.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_112925.jpg", srct: "thumbs/IMG_20191028_112925.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_113118.jpg", srct: "thumbs/IMG_20191028_113118.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_113555.jpg", srct: "thumbs/IMG_20191028_113555.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_120707.jpg", srct: "thumbs/IMG_20191028_120707.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_124319.jpg", srct: "thumbs/IMG_20191028_124319.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_125113.jpg", srct: "thumbs/IMG_20191028_125113.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_130703.jpg", srct: "thumbs/IMG_20191028_130703.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_130827.jpg", srct: "thumbs/IMG_20191028_130827.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_131328.jpg", srct: "thumbs/IMG_20191028_131328.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_131426.jpg", srct: "thumbs/IMG_20191028_131426.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_131442.jpg", srct: "thumbs/IMG_20191028_131442.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_154607.jpg", srct: "thumbs/IMG_20191028_154607.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_154936.jpg", srct: "thumbs/IMG_20191028_154936.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_155558.jpg", srct: "thumbs/IMG_20191028_155558.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_161308.jpg", srct: "thumbs/IMG_20191028_161308.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_161619.jpg", srct: "thumbs/IMG_20191028_161619.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_161841~2.jpg", srct: "thumbs/IMG_20191028_161841~2.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_162102.jpg", srct: "thumbs/IMG_20191028_162102.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_163000.jpg", srct: "thumbs/IMG_20191028_163000.png", tags: "nara", title: "" }
      , { src: "IMG_20191028_164256~2.jpg", srct: "thumbs/IMG_20191028_164256~2.png", tags: "nara", title: "" }

      // kyoto

      , { src: "IMG_20191029_115705.jpg", srct: "thumbs/IMG_20191029_115705.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_120007.jpg", srct: "thumbs/IMG_20191029_120007.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_120022.jpg", srct: "thumbs/IMG_20191029_120022.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_120110.jpg", srct: "thumbs/IMG_20191029_120110.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_140107.jpg", srct: "thumbs/IMG_20191029_140107.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_140202.jpg", srct: "thumbs/IMG_20191029_140202.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_140249.jpg", srct: "thumbs/IMG_20191029_140249.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_142445.jpg", srct: "thumbs/IMG_20191029_142445.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_143820.jpg", srct: "thumbs/IMG_20191029_143820.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_143949.jpg", srct: "thumbs/IMG_20191029_143949.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_145200.jpg", srct: "thumbs/IMG_20191029_145200.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_192345.jpg", srct: "thumbs/IMG_20191029_192345.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_192621.jpg", srct: "thumbs/IMG_20191029_192621.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_192718.jpg", srct: "thumbs/IMG_20191029_192718.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_192752.jpg", srct: "thumbs/IMG_20191029_192752.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_192951.jpg", srct: "thumbs/IMG_20191029_192951.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_193022.jpg", srct: "thumbs/IMG_20191029_193022.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_193051.jpg", srct: "thumbs/IMG_20191029_193051.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191029_193847.jpg", srct: "thumbs/IMG_20191029_193847.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_103718.jpg", srct: "thumbs/IMG_20191030_103718.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_105838.jpg", srct: "thumbs/IMG_20191030_105838.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_110159.jpg", srct: "thumbs/IMG_20191030_110159.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_112119.jpg", srct: "thumbs/IMG_20191030_112119.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_112630.jpg", srct: "thumbs/IMG_20191030_112630.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_112934.jpg", srct: "thumbs/IMG_20191030_112934.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_113128.jpg", srct: "thumbs/IMG_20191030_113128.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_113237.jpg", srct: "thumbs/IMG_20191030_113237.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_113524.jpg", srct: "thumbs/IMG_20191030_113524.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_114223.jpg", srct: "thumbs/IMG_20191030_114223.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_130142.jpg", srct: "thumbs/IMG_20191030_130142.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_131726.jpg", srct: "thumbs/IMG_20191030_131726.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_132948.jpg", srct: "thumbs/IMG_20191030_132948.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_152639.jpg", srct: "thumbs/IMG_20191030_152639.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_153242.jpg", srct: "thumbs/IMG_20191030_153242.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_161224.jpg", srct: "thumbs/IMG_20191030_161224.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_163908~3.jpg", srct: "thumbs/IMG_20191030_163908~3.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_182718~3.jpg", srct: "thumbs/IMG_20191030_182718~3.png", tags: "kyoto", title: "" }
      , { src: "IMG_20191030_184051~2.jpg", srct: "thumbs/IMG_20191030_184051~2.png", tags: "kyoto", title: "" }

    ]
  })
});
