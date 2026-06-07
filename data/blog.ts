import { blogImages } from "@/data/site";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "orderedList"; items: string[] }
  | { type: "unorderedList"; items: string[] };

export type BlogSection = {
  heading?: string;
  blocks: ContentBlock[];
};

export type RelatedService = {
  label: string;
  href: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  relatedService?: RelatedService;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-should-you-know-about-general-dentistry",
    title: "What Should You Know About General Dentistry",
    description:
      "An overview of general dentistry, the service categories available to you, and the range of services general dentists provide.",
    image: blogImages.generalDentistry,
    date: "2026-06-07",
    relatedService: { label: "General Dentistry", href: "/services/general-dentistry" },
    sections: [
      {
        blocks: [
          {
            type: "paragraph",
            text: "A great smile can make someone’s day. Apart from just good genes, having proper oral health goes a long way when it comes to maintaining a beautiful smile and of course, good dental health. Here is what you need to know about general dentistry."
          }
        ]
      },
      {
        heading: "What is General Dentistry?",
        blocks: [
          {
            type: "paragraph",
            text: "In simple terms, dentistry is the practice evaluation, diagnosis, treatment of diseases or conditions of oral cavity and even prevention of a wide variety of conditions. These conditions can range from surgical, nonsurgical and even cosmetic procedures."
          },
          {
            type: "paragraph",
            text: "General dentistry then is the practice of general oral hygiene and health. It deals with maintaining good dental health and encourages preventive measures to avoid bad dental hygiene and diseases."
          },
          {
            type: "paragraph",
            text: "In the case of damage already being done, dentists rely on restorative procedures to deal with instances of cavities, tooth decay, trauma and more."
          }
        ]
      },
      {
        heading: "Types of Service Categories Available to You",
        blocks: [
          {
            type: "paragraph",
            text: "Dentists offer a different range of services, each targeted to achieve specific results and deal with different problems."
          },
          { type: "subheading", text: "Restorative Dentistry" },
          {
            type: "paragraph",
            text: "Restorative services, as the name suggests, deal with bringing restoring your teeth that the damage done by tooth decay, trauma or even chipped or loosened tooth."
          },
          { type: "subheading", text: "Cosmetic Dentistry" },
          {
            type: "paragraph",
            text: "Want an inviting smile? Cosmetic services are aimed to be aesthetically appealing procedures like teeth whitening for one example."
          },
          { type: "subheading", text: "Preventive Dentistry" },
          {
            type: "paragraph",
            text: "As the saying goes, prevention is better than cure. Taking regular exams and giving best practices to maintain good dental health."
          },
          { type: "subheading", text: "Overall" },
          {
            type: "paragraph",
            text: "Deals with the overall dental health. Bad dental health has been linked to other diseases. For example, oral infections that go untreated can lead to improper control of diabetes."
          }
        ]
      },
      {
        heading: "The Range of Services",
        blocks: [
          {
            type: "paragraph",
            text: "Many general dentists usually train on a number of dental areas and offer different types of services. These can include."
          },
          {
            type: "orderedList",
            items: [
              "Oral surgery",
              "Teeth cleanings",
              "Crowns and bridges",
              "Cosmetic procedures",
              "Dentures",
              "Dental implants",
              "Gum disease treatment",
              "Home care instruction",
              "Nutrition counseling",
              "Root canal therapy"
            ]
          }
        ]
      }
    ]
  },
  {
    slug: "this-is-why-dental-implants-are-much-better-dentures",
    title: "All About Dental Implants",
    description:
      "What dental implants are, the types of implants, and the benefits they offer compared to conventional options like dentures.",
    image: blogImages.dentalImplants,
    date: "2026-06-07",
    relatedService: { label: "Dental Implants", href: "/services/dental-implants" },
    sections: [
      {
        blocks: [
          {
            type: "paragraph",
            text: "Let’s face it, many people, unfortunately, do not take proper care of their dental health as much as they should. This leads to many problems down the line from cavities and in some serious cases, root canals treatments. Sometimes, the root itself might need to be completely replaced. This is where dental implants come in."
          }
        ]
      },
      {
        heading: "What Are Dental Implants?",
        blocks: [
          {
            type: "paragraph",
            text: "Dental implants are made of titanium and other biocompatible material and is an excellent long-term solution to replacing missing teeth. The shape of the implants resembles a screw that are surgically placed and anchored in the jawbone and serves as a sturdy base to hold the replacement without disturbing any of the adjacent teeth. Unlike other conventional options, such as a bridge or dentures, implants help the patient to maintain improvement in aesthetic appearance by preventing bone loss, preserving the facial features and providing better stability and strength to the teeth that is required to chew properly. These implants are almost indistinguishable from the surrounding natural teeth, and once the bone and supporting tissue fuse to the implant, they are permanently secured into place."
          },
          {
            type: "paragraph",
            text: "Dental implants, as mentioned before, primarily serve the purpose of tooth replacements. However, they can be used to aid other treatments as well. Since they provide remarkable stability, it can be used to hold and support removable dentures."
          },
          {
            type: "paragraph",
            text: "Also, they can be used as a temporary anchorage device, shortened to TAD. When used as a temporary anchorage device, it can be used to keep a tooth in the desired position."
          }
        ]
      },
      {
        heading: "The Types of Dental Implants",
        blocks: [
          {
            type: "paragraph",
            text: "There are mainly two types of dental implants that have been used over the years. One of which is becoming less and less common."
          },
          { type: "subheading", text: "Endosteal Implants" },
          {
            type: "paragraph",
            text: "This type of implant is now widely adopted and is an implant done in the bone. It provides greater long-term durability."
          },
          { type: "subheading", text: "Subperiosteal Implants" },
          {
            type: "paragraph",
            text: "These are implants that are placed under the gum tissue and just on top of the jawbone. Subperiosteal implants are not in use anymore as they are not fit for the long- term."
          }
        ]
      },
      {
        heading: "Benefits of Dental Implants",
        blocks: [
          { type: "subheading", text: "Comfort" },
          {
            type: "paragraph",
            text: "Since the bone fuses with the implants, they practically become a part of you. Thus, removing the hassle of removable dentures."
          },
          { type: "subheading", text: "Better Speech" },
          {
            type: "paragraph",
            text: "Dental implants are fixed and very sturdy. This eliminates the risk of them getting misplaces of slippage when speaking."
          },
          { type: "subheading", text: "Appearance" },
          {
            type: "paragraph",
            text: "No one is fond of crooked teeth. Dental implants can help missing teeth and improve appearance."
          },
          { type: "subheading", text: "Ease in Chewing" },
          {
            type: "paragraph",
            text: "Chewing is easier with implants compared to dentures that may shift while eating."
          },
          { type: "subheading", text: "Convenience and Durability" },
          {
            type: "paragraph",
            text: "Because dental implants become a part of your bone, there is practically no need to remove them. This makes it much more convenient, as opposed to dentures. Titanium implants are also quite durable, giving you a permanent long-term solution."
          }
        ]
      },
      {
        heading: "Conclusion",
        blocks: [
          {
            type: "paragraph",
            text: "Dental implants have a very high success rate, and there is practically no worry about getting them. A trained professional can replace a missing tooth or use it as a TAD without much hassle, giving you functioning and proper teeth for life."
          }
        ]
      }
    ]
  },
  {
    slug: "3d-imaging-cbct-the-future-of-dental-care",
    title: "3D Imaging (CBCT): The Future of Dental Care",
    description:
      "Learn what 3D imaging is, how it is used in dentistry, and the advantages CBCT technology brings to dental care.",
    image: blogImages.cbct3dImaging,
    date: "2026-06-07",
    relatedService: { label: "CBCT 3D Imaging", href: "/services/cbct-3d-imaging" },
    sections: [
      {
        blocks: [
          {
            type: "paragraph",
            text: "Over the past couple of years, technology has seen exceptional growth, and unforeseen innovations have come, enriching our lives in many different ways. One of the key benefits that better access to technology and information helps us is with healthcare and medicine. The dental industry has seen the benefits in the form of 3D Imaging."
          }
        ]
      },
      {
        heading: "What is 3D Imaging",
        blocks: [
          {
            type: "paragraph",
            text: "At the heart of it, 3D Imaging is exactly what it sounds like. This technology gives us more accurate details, with a comprehensive overview of the anatomical structures in the oral cavity, head, and neck. 3-dimensional imaging system focuses on both the soft tissue and bone at the same time, thus helping us to address the problem quickly, better diagnosis and efficiently to provide the most effective treatment plans possible."
          },
          {
            type: "paragraph",
            text: "These models are incredibly detailed and accurate. Also, it allows the medical professional to move and interact with the model way more than was ever possible. The technology we use at the office, Planmeca 3D promax, gives us the opportunity of a proprietary low-dose 3D imaging protocol that enables CBCT imaging with an even lower patient radiation dose than standard panoramic imaging. The pioneering protocol is based on intelligent low dose 3D imaging algorithms that decrease effective patient doses significantly without a statistical reduction in image quality – helping clinicians everywhere adhere to the ALARA principle (As Low As Reasonably Achievable)."
          }
        ]
      },
      {
        heading: "Uses of 3D Imaging in Dentistry",
        blocks: [
          {
            type: "paragraph",
            text: "3D Imaging can be used in a range of different applications. These includes:"
          },
          { type: "subheading", text: "1. Orthodontic" },
          {
            type: "paragraph",
            text: "By creating a precise 3D model, dentists can easily and accurately address orthodontic concerns. This also allows dentists to then prescribe proper treatments as well."
          },
          { type: "subheading", text: "2. Implants" },
          {
            type: "paragraph",
            text: "Customization and personalized implants have seen great benefits of 3D imaging technology."
          },
          { type: "subheading", text: "3. Cosmetic" },
          {
            type: "paragraph",
            text: "Any form of reconstructive surgery for aesthetics and oral surgery. The detailed images of the patient’s teeth and skull give professionals a much effective way of dealing with complex procedures."
          }
        ]
      },
      {
        heading: "Advantages of 3D Imaging",
        blocks: [
          {
            type: "paragraph",
            text: "Some of the biggest benefits bought forth with the adoption of 3D Imaging are:"
          },
          {
            type: "orderedList",
            items: [
              "Superb accuracy – The 3D images of the patient’s dentures and teeth give dentists a much more accurate model to work with compared to traditional methods such as molds.",
              "Lesser radiation – Patients are exposed to less radiation since these scanners do not require much time.",
              "Efficient – Takes lesser time and achieves better results allowing for the whole process to be more efficient.",
              "More information – 3D models generally offer much more information to work with for dental professionals compared to 2D scans."
            ]
          }
        ]
      },
      {
        heading: "Conclusion",
        blocks: [
          {
            type: "paragraph",
            text: "As technology improves, dentistry, as well as the overall healthcare industry, will see more and more innovative treatment procedures that help medical professionals give better treatments to their patients. Technologies like Cone Beam Computer Tomography (CBCT) or optical solutions such as intraoral scanners (IOS) are key components of 3D Imaging."
          }
        ]
      }
    ]
  },
  {
    slug: "straighten-your-teeth-for-a-more-confident-smile-with-invisalign",
    title: "Straighten Your Teeth For a More Confident Smile With Invisalign",
    description:
      "Discover what Invisalign is, how the Invisalign process works, the benefits it offers, and what it may cost.",
    image: blogImages.invisalign,
    date: "2026-06-07",
    relatedService: { label: "Invisalign", href: "/services/invisalign" },
    sections: [
      {
        blocks: [
          {
            type: "paragraph",
            text: "Crooked teeth can be a headache for many. When you have crooked teeth, your confidence could suffer, and so can your smile. The good news is there is a way to get straight teeth (and a beautiful smile) without the need for braces."
          },
          {
            type: "paragraph",
            text: "Yes, you read that right! Invisalign is a revolutionary type of brace that gives you all the benefits of braces without the need to deal with cumbersome and odd-looking plates on your teeth. Here is what you need to know."
          }
        ]
      },
      {
        heading: "What is Invisalign?",
        blocks: [
          {
            type: "paragraph",
            text: "Invisalign is a brand and also a product – they are a brace made for crooked or misaligned teeth that use a special blend of plastic. One of the most common frustrations patients express with braces is they look odd. Some patients are embarrassed to wear their braces just for the fact they are so very visible."
          },
          {
            type: "paragraph",
            text: "The aligners are smooth, plastic trays that align the teeth discreetly for a busy professional lifestyle. This is the problem that Invisalign solves. They are a clear brace that you wear to straighten your teeth. Since the material is almost transparent, you do not have to deal with embarrassing smiles. Unlike traditional metal braces, these aligners are more comfortable to wear and will not irritate the gums."
          }
        ]
      },
      {
        heading: "The Invisalign Process",
        blocks: [
          {
            type: "paragraph",
            text: "There are a couple of steps to a better smile with Invisalign. This is how it works."
          },
          { type: "subheading", text: "1. Doctor consolation and treatment plant" },
          {
            type: "paragraph",
            text: "The total process of working with Invisalign starts with a dentist consultation. A 3D model is taken of your teeth, and a customized treatment plan and braces are made personally for you based on the mold. The treatment plan will depend on your condition and the complexity of the case."
          },
          {
            type: "paragraph",
            text: "After the scan and consultation are complete, an Invisalign brace made to fit perfectly for you should be worn till the end of the treatment."
          },
          { type: "subheading", text: "2. Wearing the Invisalign and regular checkups" },
          {
            type: "paragraph",
            text: "After getting your invisible Invisalign braces, you are well set on your way to keeping your beautiful smile. Expect regular checkups in which your doctor will make sure the braces fit perfectly."
          },
          {
            type: "paragraph",
            text: "You will also be needing a face-to-face session in every 6 to 8 weeks to ensure the braces are working as they should. This checkup is also key for your next batch of aligners."
          },
          {
            type: "paragraph",
            text: "Since these braces are practically transparent, your daily routine is not interrupted. You can take them out easily when needed and go on with your merry day."
          },
          { type: "subheading", text: "3. See results within weeks" },
          {
            type: "paragraph",
            text: "You can expect to see results within a matter of weeks. There are some cases of full treatments taking only six months – the duration for you, though, will depend on your specific case."
          }
        ]
      },
      {
        heading: "Benefits of Invisalign and How Much Does It Cost?",
        blocks: [
          {
            type: "paragraph",
            text: "Invisalign is loved by so many for a reason. There are clear benefits (no pun intended) compared to traditional braces that look ugly and can be even uncomfortable. Some benefits are:"
          },
          {
            type: "unorderedList",
            items: [
              "Invisible braces give you more confidence",
              "Not irritate the gum",
              "Faster and more predictable outcomes",
              "Easy to remove and put on",
              "More comfortable compared to traditional braces",
              "Takes the same amount of time for treatment and in some cases even shorter"
            ]
          },
          {
            type: "paragraph",
            text: "The costs of the treatment will vary depending on your case since it is a personalized treatment designed to work specifically for you, the treatment to cost anywhere between $3,000 to $7,000. Patients can easily just pay around $3000 with insurance."
          }
        ]
      },
      {
        heading: "Conclusion",
        blocks: [
          {
            type: "paragraph",
            text: "Invisalign is an orthodontic therapy with a series of clear aligners that help the teeth become straight faster and move them gradually to the proper position so that you can maintain healthier teeth and gums to achieve a beautiful smile. This is safe and revolutionary alternative to traditional braces without all the cons of braces. They are transparent and are a quick, personalized treatment that produces the best results."
          }
        ]
      }
    ]
  },
  {
    slug: "everything-to-know-about-teeth-whitening",
    title: "Everything to Know About Teeth Whitening",
    description:
      "How professional teeth whitening works, what causes teeth discoloration, and what to expect from the procedure.",
    image: blogImages.teethWhitening,
    date: "2026-06-07",
    relatedService: { label: "Teeth Whitening", href: "/services/teeth-whitening" },
    sections: [
      {
        blocks: [
          {
            type: "paragraph",
            text: "Ever wondered why some people have whiter teeth than others and what makes them look so attractive? Teeth whitening is how it is done. People are different and are born with color for their teeth."
          },
          {
            type: "paragraph",
            text: "Some have great white teeth, others, not so much. The good news is there are many things you can do about it if you want whiter teeth."
          }
        ]
      },
      {
        heading: "What is Teeth Whitening and How Does it Work?",
        blocks: [
          {
            type: "paragraph",
            text: "Professional tooth whitening (also known office-bleaching) is a treatment that helps you to achieve beautiful bright and confident smile that you desire with just one short visit."
          },
          {
            type: "paragraph",
            text: "Office whitening is very effective, utilizing the variable intensity setting of special advanced light–activated technology with a bleaching agent applied onto the natural teeth"
          },
          {
            type: "paragraph",
            text: "Teeth whitening procedures use safest bleaching products to restore teeth color, making them whiter and more appealing. Your dentist will use bleaching agents that can results in 3 or some cases up to 8 shades lighter teeth. This does not usually result in a complete color transformation but can make your teeth a couple of shades lighter."
          },
          {
            type: "paragraph",
            text: "The sessions are not that long either. Procedures like the Zoom system can take a single 2-hour session. Generally, they are done in a couple of 30 to 60 minutes sessions."
          }
        ]
      },
      {
        heading: "Causes of Teeth Discoloration",
        blocks: [
          {
            type: "paragraph",
            text: "Your eating and drinking habits might be causing your tooth to lose its natural white color without you knowing."
          },
          {
            type: "paragraph",
            text: "Here are some common foods and habits that cause tooth discoloration:"
          },
          {
            type: "orderedList",
            items: ["Smoking", "Wine", "Coffee or tea", "Soft drinks", "Strong colored fruits"]
          }
        ]
      },
      {
        heading: "Conclusion",
        blocks: [
          {
            type: "paragraph",
            text: "Teeth whitening is an easy, efficient, safe procedure to achieve beautiful confident smile that you dream. Consult with your dentist to know what would be the best option for you."
          }
        ]
      }
    ]
  },
  {
    slug: "everything-to-know-about-root-canal-therapy",
    title: "Everything to Know About Root Canal Therapy",
    description:
      "What root canal therapy is, when you might need it, and why it helps preserve your natural tooth.",
    image: blogImages.rootCanalTherapy,
    date: "2026-06-07",
    relatedService: { label: "Root Canal Therapy", href: "/services/root-canal-therapy" },
    sections: [
      {
        blocks: [
          {
            type: "paragraph",
            text: "Endodontic treatment (or root canal therapy, RCT) is one of the most common and straight forward treatments eliminate the bad bacteria from the pulp (nerve), relieves dental pain and restores the pulp. RCT is not just giving us a chance to eliminate the infection from the tooth, but also to keep the original structure of the natural tooth intact and prevent the tooth from needing of extraction and the subsequent treatment of bridge, which are significantly more expensive and complicated treatment."
          },
          {
            type: "paragraph",
            text: "This article gives you everything you need to know about root canal therapy."
          }
        ]
      },
      {
        heading: "What is Root Canal Therapy?",
        blocks: [
          {
            type: "paragraph",
            text: "You have heard the phrase root canal being thrown around whenever someone gets treatment on their root canal."
          },
          {
            type: "paragraph",
            text: "A root canal is not a treatment itself at all, rather a part of the tooth. A tooth is divided into two main parts. You have the crown and the root. The crown sits above the gums, and the root naturally is then, everything below the gums."
          },
          {
            type: "paragraph",
            text: "A root canal therapy, therefore, is a procedure that deals with cleaning and treating the root and removing pulp inside it if needed. The dentist will then seal it to end the procedure."
          }
        ]
      },
      {
        heading: "When Do You Need A Root Canal Therapy?",
        blocks: [
          {
            type: "paragraph",
            text: "People who suffer from a sharp pain in the teeth typically might require root canal therapy."
          },
          {
            type: "paragraph",
            text: "In the case of the pulp being damaged (traumatized), it fails to repair itself, causing the tissues to die. This is a telltale sign for the need of a root canal treatment."
          },
          {
            type: "paragraph",
            text: "Untreated cavities or chipped tooth structure may lead to bacteria entering the pulp. If a damaged pulp is not treated, this could lead to pain and very uncomfortableness in chewing. In a worst-case scenario, the infection can spread, and the tooth might be needed to be removed."
          }
        ]
      },
      {
        heading: "Conclusion",
        blocks: [
          {
            type: "paragraph",
            text: "Root canal therapy has a tremendously high success rate, and if you are one of the millions who are afraid of a visit to the dentist, there is nothing to worry about. The dentist will use local anesthesia to numb the pain, and the procedure is done without much hassle at all."
          }
        ]
      }
    ]
  },
  {
    slug: "get-a-better-smile-with-the-help-of-cosmetic-dentistry",
    title: "Get a Better Smile with The Help of Cosmetic Dentistry",
    description:
      "What cosmetic dentistry is and the types of treatments that can restore and enhance the appearance of your smile.",
    image: blogImages.cosmeticDentistry,
    date: "2026-06-07",
    relatedService: { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
    sections: [
      {
        blocks: [
          {
            type: "paragraph",
            text: "If you have ever dreamed of improving your smile and self-confidence, we are here to create the beautiful smile you deserve with the highest quality material and the most advanced technology."
          }
        ]
      },
      {
        heading: "What is Cosmetic Dentistry?",
        blocks: [
          {
            type: "paragraph",
            text: "Cosmetic dental solutions are any type of dental procedure which restore the appearance of teeth, including fixing stained, chipped, misaligned, misshapen, or worn teeth, as well as enhancing the visual appearance of teeth and gums. There is an extensive array of affordable cosmetic treatments at our office available to help you transform your smile, including porcelain veneers, dental crowns, bridges, and tooth-colored bonding. Cosmetic dentistry provides you with an overall beautiful smile and increased self-confidence."
          }
        ]
      },
      {
        heading: "The Types of Treatment",
        blocks: [
          {
            type: "paragraph",
            text: "A dentist can be trained in different forms of services and types of treatments. These include:"
          },
          { type: "subheading", text: "1. Dental Veneers" },
          {
            type: "paragraph",
            text: "When treating using dental veneers, some enamel is removed from the teeth. A thin custom shell is placed on the front. This can be used to fix the colors, shape or size of teeth."
          },
          { type: "subheading", text: "2. Dental Crown( Cap)" },
          {
            type: "paragraph",
            text: "in the case of a damaged tooth above the gums, a dental cap or dental crown can be used for the treatment. It sits over a damaged or decayed tooth bringing it to its original shape and/or color. These are usually made from porcelain that has been fused with metal or with just metal."
          },
          { type: "subheading", text: "3. Teeth Whitening" },
          {
            type: "paragraph",
            text: "Teeth whitening is one of the more common and simplest procedures available. This includes bleaching your teeth to make them whiter and more appealing."
          },
          { type: "subheading", text: "4. Dental Bonding" },
          {
            type: "paragraph",
            text: "In the case of a decayed or chipped tooth, another option is dental bonding. Malleable and durable plastic material is molded and put over the damaged tooth. The dentist then molds the material to the teeth to correct any deformations."
          }
        ]
      },
      {
        heading: "Conclusion",
        blocks: [
          {
            type: "paragraph",
            text: "Cosmetic dentistry can be very beneficial for someone insecure about their appearance be it because of a missing tooth or their color. These procedures help restore beautiful healthy-looking teeth giving you a better and more inviting smile."
          }
        ]
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
