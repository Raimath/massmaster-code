const allPhotos = [
    {
        id: 1,
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469291/DSC05413_kchjiu.webp",
        category:'prewedding',
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469291/DSC05413_kchjiu.webp"
    },
    {
        id: 2,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469289/DSC05408_hfhaec.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469289/DSC05408_hfhaec.webp"
    },
    {
        id: 3,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469287/2_a4rxay.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469287/2_a4rxay.webp"
    },
    {
        id: 4,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469286/DSC05393_bzkhtr.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469286/DSC05393_bzkhtr.webp"
    },
    {
        id: 5,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469285/DSC05033_io0s52.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469285/DSC05033_io0s52.webp"
    },
    {
        id: 6,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469281/DSC04989_cvu7p6.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469281/DSC04989_cvu7p6.webp"
    },
    {
        id: 7,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469280/DSC04994_qjh2fw.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469280/DSC04994_qjh2fw.webp"
    },
    {
        id: 8,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469278/DSC05390_wh308q.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469278/DSC05390_wh308q.webp"
    },
    {
        id: 9,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469276/DSC05415_ggjlj6.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469276/DSC05415_ggjlj6.webp"
    },
    {
        id: 10,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469275/DSC04970_pw3nr0.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469275/DSC04970_pw3nr0.webp"
    },
    {
        id: 11,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469273/DSC05412_l8lcim.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469273/DSC05412_l8lcim.webp"
    },
    {
        id: 12,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469272/DSC05361_evsd7a.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469272/DSC05361_evsd7a.webp"
    },
    {
        id: 13,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469269/DSC04994-2_jlxx86.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469269/DSC04994-2_jlxx86.webp"
    },
    {
        id: 14,
        category:'candid',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469268/DSC01403_uffi1h.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469268/DSC01403_uffi1h.webp"
    },
    {
        id: 15,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469265/DSC05585_rkwg5i.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469265/DSC05585_rkwg5i.webp"
    },
    {
        id: 16,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469265/DSC05628_qr7vkw.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469265/DSC05628_qr7vkw.webp"
    },
    {
        id: 17,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469264/DSC01506_unw3nj.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469264/DSC01506_unw3nj.webp"
    },
    {
        id: 18,
        category:'candid',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469261/DSC01782_ioqwa2.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469261/DSC01782_ioqwa2.webp"
    },
    {
        id: 19,
        category:'candid',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469260/DSC01409_dtdi9y.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469260/DSC01409_dtdi9y.webp"
    },
    {
        id: 20,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469259/DSC04948_mjhcip.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469259/DSC04948_mjhcip.webp"
    },
    {
        id: 21,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469257/DSC04957_jwva7v.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469257/DSC04957_jwva7v.webp"
    },
    {
        id: 22,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469257/DSC04896_hse39w.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469257/DSC04896_hse39w.webp"
    },
    {
        id: 23,
        category:'candid',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469254/DSC01407_xed3oz.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469254/DSC01407_xed3oz.webp"
    },
    {
        id: 24,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469250/DSC05033-2_i0u36m.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469250/DSC05033-2_i0u36m.webp"
    },
    {
        id: 25,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469249/DSC04591_fy6lp1.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469249/DSC04591_fy6lp1.webp"
    },
    {
        id: 26,
        category:'candid',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469248/DSC01402_mtwwto.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469248/DSC01402_mtwwto.webp",
    },
    {
        id: 27,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469247/DSC04592_gqcca8.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469247/DSC04592_gqcca8.webp"
    },
    {
        id: 28,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469245/1_io2lqt.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469245/1_io2lqt.webp"
    },
    {
        id: 29,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469244/DSC04898_mhphzr.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469244/DSC04898_mhphzr.webp"
    },
    {
        id: 30,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469242/DSC04808_cugwoy.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469242/DSC04808_cugwoy.webp"
    },
    {
        id: 31,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469241/DSC04685_fnhrcw.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469241/DSC04685_fnhrcw.webp"
    },
    {
        id: 32,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469239/DSC04706_xcp7zt.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469239/DSC04706_xcp7zt.webp"
    },
    {
        id: 33,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469238/DSC04714_r5lowt.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469238/DSC04714_r5lowt.webp"
    },
    {
        id: 34,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469237/DSC04682_g0dgur.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469237/DSC04682_g0dgur.webp"
    },
    {
        id: 35,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469235/DSC04812_he9lan.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469235/DSC04812_he9lan.webp"
    },
    {
        id: 36,
        category:'prewedding',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469234/DSC04628_n1zuc4.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469234/DSC04628_n1zuc4.webp"
    },
    {
        id: 37,
        category:'candid',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469234/DSC04620_owkls5.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469234/DSC04620_owkls5.webp"
    },
    {
        id: 38,
        category:'candid',
        url: "https://res.cloudinary.com/ddkfbtxsp/image/upload/q_auto/v1744469232/DSC04604_vvaxuh.webp",
        enhanced: "https://res.cloudinary.com/ddkfbtxsp/image/upload/f_auto,q_auto,w_1000/v1744469232/DSC04604_vvaxuh.webp"
    }
];

export default allPhotos;
