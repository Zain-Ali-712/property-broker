export interface PropertyFeature {
    label: string;
    value: string;
}

export interface Property {
    id: string;
    title: string;
    address: string;
    beds: number;
    baths: number;
    garages: number;
    propertyId: string;
    price: string;
    description: string;
    features: PropertyFeature[];
    images: string[];
}

export const propertiesData: Property[] = [
    {
        id: "1",
        title: "Double title - double opportunity!",
        address: "3-5 Rewa Road, Raumati Beach",
        beds: 3,
        baths: 2,
        garages: 3,
        propertyId: "KPU219723",
        price: "Tender (will not be sold prior) 19 March 2026 | 1:00pm",
        description: "A fantastic opportunity awaits in the ever-popular Raumati Beach. Set on an impressive 1,618m² (approx) across two titles, this extended 1960s villa is surrounded by established gardens and graceful silver birch trees, offering space, privacy and future potential.",
        features: [
            { label: "Area", value: "155.00m2" },
            { label: "Land", value: "1,618 m2" },
            { label: "Rates", value: "$6,251.07" },
            { label: "LV", value: "$610,000" },
            { label: "RV", value: "$890,000" },
        ],
        images: [
            "/RaumatiBeach-main.jpg",
            "/RaumatiBeach-sub1.jpg",
            "/RaumatiBeach-sub2.jpg",
            "/RaumatiBeach-sub3.jpg",
            "/RaumatiBeach-sub4.jpg",
        ],
    },
    {
        id: "2",
        title: "Bursts of family living - estate sale",
        address: "34 Sunburst Court, Paraparaumu Beach",
        beds: 3,
        baths: 2,
        garages: 2,
        propertyId: "KPU222344",
        price: "Deadline Sale (unless sold prior) closes 1.00pm Thursday 19th March 2026",
        description: "Tucked away in a quiet cul-de-sac, this quality brick and tile home offers 194m2 of thoughtfully designed living, with space in all the right places. Being sold as an estate sale, this cherished family home has been loved for over 20 years.",
        features: [
            { label: "Area", value: "194.00m2" },
            { label: "Land", value: "720 m2" },
            { label: "Rates", value: "$5,761.81" },
            { label: "LV", value: "$430,000" },
            { label: "RV", value: "$840,000" },
        ],
        images: [
            "/ParaparaumuBeach-main.jpg",
            "/ParaparaumuBeach-sub1.jpg",
            "/ParaparaumuBeach-sub2.jpg",
            "/ParaparaumuBeach-sub3.jpg",
            "/ParaparaumuBeach-sub4.jpg",
        ],
    },
    {
        id: "3",
        title: "Designed with everything in mind",
        address: "7 Pihoihoi Close, Waikanae",
        beds: 4,
        baths: 2,
        garages: 2,
        propertyId: "KPU197734",
        price: "Deadline Sale closes 1.00pm Tuesday 17th March 2026",
        description: "Tucked away at the end of a quiet cul-de-sac and backing onto native bush, this exceptional, new home delivers space, privacy and effortless single-level living in one of Waikanae's most desirable settings.",
        features: [
            { label: "Area", value: "260.00m2" },
            { label: "Land", value: "1586 m2" },
            { label: "Rates", value: "$5,170.00" },
            { label: "LV", value: "$470,000" },
            { label: "RV", value: "$1,200,000" },
        ],
        images: [
            "/Waikanae-main.jpg",
            "/Waikanae-sub1.jpg",
            "/Waikanae-sub2.jpg",
            "/Waikanae-sub3.jpg",
            "/Waikanae-sub4.jpg",
        ],
    },
    {
        id: "4",
        title: "Contemporary Coastal Living!",
        address: "34 Pairuku Lane, Peka Peka",
        beds: 3,
        baths: 2,
        garages: 2,
        propertyId: "KPU209713",
        price: "Buyers $1,950,000+",
        description: "Nestled down a peaceful lane, just one street back from Peka Peka Beach, this striking 262m2 residence offers an inspired balance of modern elegance, coastal relaxation, and natural tranquillity. Surrounded by lush established gardens and overlooking a serene lakeside outlook, it provides the ultimate retreat for those seeking both style and seclusion.",
        features: [
            { label: "Area", value: "262.00m2" },
            { label: "Land", value: "4160 m2" },
            { label: "Rates", value: "$5,108.37" },
            { label: "LV", value: "$590,000" },
            { label: "RV", value: "$1,875,000" },
        ],
        images: [
            "/PekaPeka-main.jpg",
            "/PekaPeka-sub1.jpg",
            "/PekaPeka-sub2.jpg",
            "/PekaPeka-sub3.jpg",
            "/PekaPeka-sub4.jpg",
        ],
    },
    {
        id: "5",
        title: "Coastal Living at Moana Views",
        address: "23 Ocean Road, Paraparaumu Beach",
        beds: 2,
        baths: 2,
        garages: 1,
        propertyId: "KPU200692",
        price: "Buyers $849,000+",
        description: "Welcome to Moana Views - Experience coastal living at its finest with six brand-new two-bedroom townhouses on Ocean Road, Paraparaumu Beach. Just 200 metres from the shoreline, these architecturally designed homes blend contemporary style with relaxed seaside charm.",
        features: [
            { label: "Area", value: "New Build" },
            { label: "Proximity", value: "200m to Shore" },
        ],
        images: [
            "/ParaparaumuBeach2.jpg",
            "/ParaparaumuBeach2-sub1.jpg",
            "/ParaparaumuBeach2-sub2.jpg",
            "/ParaparaumuBeach2-sub3.jpg",
            "/ParaparaumuBeach2-sub4.jpg",
        ],
    },
    {
        id: "6",
        title: "Private, Central and Built to Last",
        address: "14B Bertelsen Court, Otaki",
        beds: 3,
        baths: 2,
        garages: 2,
        propertyId: "OTU218835",
        price: "Deadline Sale closes 2.00pm Monday 9th March 2026",
        description: "This is a quality 175m2 family home built in 2017, that delivers the perfect balance of privacy, comfort, and exceptional convenience. Tucked away, yet just minutes walk from shops, supermarket, train station, and school, this address places everyday living effortlessly within reach in Ōtaki.",
        features: [
            { label: "Area", value: "175m2" },
            { label: "Build Year", value: "2017" },
        ],
        images: [
            "/Otaki-main.jpg",
            "/Otaki-sub1.jpg",
            "/Otaki-sub2.jpg",
            "/Otaki-sub3.jpg",
            "/Otaki-sub4.jpg",
        ],
    },
];
