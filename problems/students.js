/**
 * 
 * Akobir => 9 dars
 * Jasur => 10 dars (+5)
 * shohjahon => 9 dars
 * Asilbek => 9 dars
 * johongir => 9 dars
 * Shohjahon => 9 dars
 * Alijon => 9 dars
 * Muhammadjon => 9 dars
 * 
 */

// let products = [
//     {
//         name: 'burger king',
//         id: 1,
//         category: 'burger'
//     },
//     {
//         name: 'burger cheese',
//         id: 2,
//         category: 'burger'
//     },
//     {
//         name: 'burger lavash',
//         id: 3,
//         category: 'burger'
//     },
//     {
//         name: 'burger salad',
//         id: 4,
//         category: 'burger'
//     },
//     {
//         name: 'lavash cheese',
//         id: 5,
//         category: 'lavash'
//     },
//     {
//         name: 'lavash orginal',
//         id: 6,
//         category: 'lavash'
//     },
//     {
//         name: 'small lavash',
//         id: 7,
//         category: 'lavash'
//     },
//     {
//         name: 'big lavash',
//         id: 8,
//         category: 'lavash'
//     },
//     {
//         name: 'pepironi lavash',
//         id: 10,
//         category: 'lavash'
//     },
//     {
//         name: 'lavash cheese big',
//         id: 12,
//         category: 'lavash'
//     },
//     {
//         img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nike.com%2Fin%2Fw%2Fmens-shoes-nik1zy7ok&psig=AOvVaw1wSfydjHNiJaY8zWUlIzv6&ust=1699017465229000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiT_7mzpYIDFQAAAAAdAAAAABBN',
//         id: 9,
//         name: 'shirt',
//         price: 25,
//         category: 'clothes',
//         quant: 1
//     },
//     {
//         img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_PDP_1280_v1%2Ff_auto%2Cq_auto%3Aeco%2F99486859-0ff3-46b4-949b-2d16af2ad421%2Fcustom-nike-dunk-high-by-you-shoes.png&tbnid=BLjsrxMgAfj7zM&vet=12ahUKEwjfnZC1s6WCAxWbLBAIHff_ApcQMygbegQIARB_..i&imgrefurl=https%3A%2F%2Fwww.nike.com%2Fca%2Fu%2Fcustom-nike-dunk-high-by-you-shoes-10001378&docid=-qGJDc-Iz2lyTM&w=1280&h=1280&q=nike%20shoes&ved=2ahUKEwjfnZC1s6WCAxWbLBAIHff_ApcQMygbegQIARB_',
//         id: 4,
//         name: 'iphone 12 pro max',
//         price: 110,
//         category: 'phone',
//         quant: 1
//     },
//     {
//         img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.stockx.com%2Fimages%2FNike-Dunk-Low-SE-Jackpot-Product.jpg%3Ffit%3Dfill%26bg%3DFFFFFF%26w%3D700%26h%3D500%26fm%3Dwebp%26auto%3Dcompress%26q%3D90%26dpr%3D2%26trim%3Dcolor%26updated_at%3D1661437314&tbnid=9hYZeax5iuPI9M&vet=12ahUKEwjfnZC1s6WCAxWbLBAIHff_ApcQMygeegUIARCGAQ..i&imgrefurl=https%3A%2F%2Fstockx.com%2Fnike-dunk-low-se-jackpot&docid=csB6fF3qDOBYtM&w=1400&h=1000&q=nike%20shoes&ved=2ahUKEwjfnZC1s6WCAxWbLBAIHff_ApcQMygeegUIARCGAQ',
//         id: 5,
//         name: 'samsung galaxy',
//         price: 110,
//         category: 'phone',
//         quant: 1
//     },
//     {
//         img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Ft_PDP_1280_v1%2Ff_auto%2Cq_auto%3Aeco%2Fb0b89eec-8166-4375-aa67-96d024ad58e4%2Fair-zoom-flight-95-shoes-q939R7.png&tbnid=XAOc0capytPNqM&vet=12ahUKEwjfnZC1s6WCAxWbLBAIHff_ApcQMygregUIARChAQ..i&imgrefurl=https%3A%2F%2Fwww.nike.com%2Fat%2Fen%2Ft%2Fair-zoom-flight-95-shoes-q939R7&docid=2lUmizD1584q5M&w=1280&h=1600&itg=1&q=nike%20shoes&ved=2ahUKEwjfnZC1s6WCAxWbLBAIHff_ApcQMygregUIARChAQ',
//         id: 6,
//         name: 't-shirt',
//         price: 40,
//         category: 'clothes',
//         quant: 1
//     },
//     {
//         img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nike.com%2Fa%2Fimages%2Fc_limit%2Cw_592%2Cf_auto%2Ft_product_v1%2F15724a2d-3ef7-4e16-86b8-570f314bab13%2Fair-dunk-jumbo-mens-shoes-BBj0dh.png&tbnid=ySp1S_Pfz02B8M&vet=12ahUKEwjfnZC1s6WCAxWbLBAIHff_ApcQMyg3egUIARC-AQ..i&imgrefurl=https%3A%2F%2Fwww.nike.com%2Fw%2Fdunk-shoes-90aohzy7ok&docid=NOlMKrbHMc3-yM&w=592&h=592&q=nike%20shoes&ved=2ahUKEwjfnZC1s6WCAxWbLBAIHff_ApcQMyg3egUIARC-AQ',
//         id: 7,
//         name: 'football boot',
//         price: 50,
//         category: 'clothes',
//         quant: 1
//     },
// ]

