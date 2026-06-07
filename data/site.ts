export const baseUrl = "https://www.ethicadent.com";

export const businessInfo = {
  name: "Ethicadent Dental Studio",
  alternateName: "Ethicadent Dental Office",
  doctor: "Dr. Helin Derya Yildiz",
  address: "6418 W Belmont Ave, Chicago, IL 60634",
  streetAddress: "6418 W Belmont Ave",
  city: "Chicago",
  region: "IL",
  postalCode: "60634",
  phone: "(773)-657-3075",
  phoneSchema: "+17736573075",
  phoneHref: "tel:+17736573075",
  email: "yildiz@ethicadent.com",
  emailHref: "mailto:yildiz@ethicadent.com",
  mapsHref: "https://maps.app.goo.gl/TrHnCdovvuRHpPWR9",
  latitude: 41.93862298281718,
  longitude: -87.78681738780709,
  social: [
    { label: "Facebook", href: "https://www.facebook.com/ethicadent" },
    { label: "Instagram", href: "https://www.instagram.com/ethicadent/" },
    { label: "Yelp", href: "https://www.yelp.com/biz/ethicadent-chicago" }
  ],
  hours: [
    { day: "Monday", time: "9:00 AM - 5:00 PM", schemaDay: "Monday", opens: "09:00", closes: "17:00" },
    { day: "Tuesday", time: "9:00 AM - 5:00 PM", schemaDay: "Tuesday", opens: "09:00", closes: "17:00" },
    { day: "Wednesday", time: "9:00 AM - 1:00 PM", schemaDay: "Wednesday", opens: "09:00", closes: "13:00" },
    { day: "Thursday", time: "9:00 AM - 5:00 PM", schemaDay: "Thursday", opens: "09:00", closes: "17:00" },
    { day: "Friday", time: "9:00 AM - 4:00 PM", schemaDay: "Friday", opens: "09:00", closes: "16:00" },
    { day: "Saturday", time: "9:00 AM - 1:00 PM", schemaDay: "Saturday", opens: "09:00", closes: "13:00" },
    { day: "Sunday", time: "Closed" }
  ]
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

export const imageAssets = {
  logo: "/assets/brand/ethicadent-logo.jpg",
  favicon: "/assets/brand/favicon.jpg",
  hero: "/assets/google-maps/doctor-treatment-action.jpg",
  team: "/assets/photos/team.jpg",
  office: "/assets/photos/operator-room.jpg",
  banner: "/assets/photos/team.jpg",
  sign: "/assets/photos/exterior-sign.jpg",
  general: "/assets/google-maps/close-care-visit.jpg",
  implants: "/assets/google-maps/implant-model-consult.jpg",
  invisalign: "/assets/google-maps/smile-scan-consult.jpg",
  cosmetic: "/assets/google-maps/smile-photo-review.jpg",
  whitening: "/assets/google-maps/gentle-exam-action.jpg",
  rootCanal: "/assets/google-maps/intraoral-camera-close.jpg",
  wisdom: "/assets/google-maps/cbct-consultation.jpg",
  crown: "/assets/google-maps/intraoral-camera-exam.jpg",
  cbct: "/assets/google-maps/cbct-scan-smile.jpg",
  googleMaps: {
    invisalignCertificate: "/assets/google-maps/invisalign-certificate.jpg",
    smileScanConsult: "/assets/google-maps/smile-scan-consult.jpg",
    intraoralCameraExam: "/assets/google-maps/intraoral-camera-exam.jpg",
    patientScreenReview: "/assets/google-maps/patient-screen-review.jpg",
    doctorTreatmentAction: "/assets/google-maps/doctor-treatment-action.jpg",
    consultationCare: "/assets/google-maps/consultation-care.jpg",
    cbctScanSmile: "/assets/google-maps/cbct-scan-smile.jpg",
    treatmentRoomWide: "/assets/google-maps/treatment-room-wide.jpg",
    dentalCertificate: "/assets/google-maps/dental-certificate.jpg",
    operatoryTechnology: "/assets/google-maps/operatory-technology.jpg",
    closeCareVisit: "/assets/google-maps/close-care-visit.jpg",
    sterilizationStation: "/assets/google-maps/sterilization-station.jpg",
    smilePhotoReview: "/assets/google-maps/smile-photo-review.jpg",
    waitingLounge: "/assets/google-maps/waiting-lounge.jpg",
    cbctConsultation: "/assets/google-maps/cbct-consultation.jpg",
    intraoralCameraClose: "/assets/google-maps/intraoral-camera-close.jpg",
    dentalMirrorExam: "/assets/google-maps/dental-mirror-exam.jpg",
    credentialCertificate: "/assets/google-maps/credential-certificate.jpg",
    operatoryFull: "/assets/google-maps/operatory-full.jpg",
    gentleExamAction: "/assets/google-maps/gentle-exam-action.jpg",
    belmontAvenueSign: "/assets/google-maps/belmont-avenue-sign.jpg",
    implantModelConsult: "/assets/google-maps/implant-model-consult.jpg"
  }
};

export const featuredPhotoStory = [
  {
    src: imageAssets.googleMaps.patientScreenReview,
    alt: "Ethicadent patient reviewing intraoral images with the dental team",
    label: "Clear visual exams"
  },
  {
    src: imageAssets.googleMaps.cbctConsultation,
    alt: "Ethicadent team using dental imaging technology during a patient consultation",
    label: "Technology-supported planning"
  },
  {
    src: imageAssets.googleMaps.doctorTreatmentAction,
    alt: "Ethicadent clinician providing gentle care during a dental visit",
    label: "Gentle chairside care"
  },
  {
    src: imageAssets.googleMaps.operatoryTechnology,
    alt: "Ethicadent operatory with modern dental technology",
    label: "Modern treatment rooms"
  },
  {
    src: imageAssets.googleMaps.sterilizationStation,
    alt: "Ethicadent sterilization and clinical support area",
    label: "Clean clinical systems"
  },
  {
    src: imageAssets.googleMaps.belmontAvenueSign,
    alt: "Ethicadent exterior sign on Belmont Avenue in Chicago",
    label: "Belmont Ave location"
  }
];

export const serviceLinks = [
  { label: "General Dentistry", href: "/services/general-dentistry" },
  { label: "Dental Implants", href: "/services/dental-implants" },
  { label: "Invisalign", href: "/services/invisalign" },
  { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening" },
  { label: "Root Canal Therapy", href: "/services/root-canal-therapy" },
  { label: "Wisdom Teeth Extraction", href: "/services/wisdom-teeth-extraction" },
  { label: "Crown Lengthening", href: "/services/crown-lengthening" },
  { label: "CBCT 3D Imaging", href: "/services/cbct-3d-imaging" }
];
