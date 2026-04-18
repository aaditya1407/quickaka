import Container from "../components/layout/Container";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import PageHero from "../components/layout/PageHero";
import SEO from "../components/layout/SEO";
import { Shield } from "lucide-react";

const TermsPage = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Read QuicKaka's terms and conditions — our policies on bookings, payments, data protection, cancellations, and service guarantees for all home services in Bhopal."
        keywords="QuicKaka terms, terms and conditions, home service policy, booking terms Bhopal, privacy policy, cancellation policy, QuicKaka refund"
        path="/terms"
      />
      <Navbar />
      <main>
        {/* Hero Banner */}
        <PageHero
          image="https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?q=80&w=1470&auto=format&fit=crop"
          icon={<Shield size={16} className="text-accent" />}
          badgeLabel="Terms & Conditions"
          titleLine1="Clear, Fair &"
          titleLine2="Transparent"
          subtitle="These terms define how we operate, protect your data, and ensure a secure and trustworthy experience for every service you book."
          imagePosition="center center"
        />

        {/* Terms Content */}
        <section className="py-16 md:py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 leading-relaxed mb-6">
                These terms and conditions (“Terms”) govern the use of services
                made available on or through https://www.quickaka.com
                (collectively, the “Platform”, and together with the services
                made available on or through the Platform, the “Services”).
                These Terms also include our privacy policy, available at
                https://www.quickaka.com/privacy-policy (“Privacy Policy”), and
                any guidelines, additional, or supplemental terms, policies, and
                disclaimers made available or issued by us from time to time
                (“Supplemental Terms”). The Privacy Policy and the Supplemental
                Terms form an integral part of these Terms. In the event of a
                conflict between these Terms and the Supplemental Terms with
                respect to applicable Services, the Supplemental Terms will
                prevail.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                The Terms constitute a binding and enforceable legal contract
                between GS Enterprises (a company incorporated under the
                Companies Act, 2013 with its registered address at 32 Vaishali
                Nagar Kotra Sultanabad, Bhopal, Madhya Pradesh – 462003 and its
                affiliates (“Quickaka”, “we”, “us”, or “our”), and you, a user
                of the Services, or any legal entity that books Prof Services
                (defined below) on behalf of end-users (“you” or “Customer”). By
                using the Services, you represent and warrant that you have full
                legal capacity and authority to agree to and bind yourself to
                these Terms. If you represent any other person, you confirm and
                represent that you have the necessary power and authority to
                bind such person to these Terms.
              </p>

              <p className="text-gray-600 leading-relaxed">
                By using the Services, you agree that you have read, understood,
                and are bound by, these Terms, as amended from time to time, and
                that you will comply with the requirements listed here. These
                Terms expressly supersede any prior written agreements with you.
                If you do not agree to these Terms, or comply with the
                requirements listed here, please do not use the Services.
              </p>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                SERVICES
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> The Services include the provision of the
                  Platform that enables you to arrange and schedule different
                  home-based services with independent third-party service
                  providers of those services (“Service Professionals”). As a
                  part of the Services, Quickaka facilitates the transfer of
                  payments to Service Professionals for the services they render
                  to you and collects payments on behalf of such Service
                  Professionals.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(b)</strong> The services rendered by Service
                  Professionals are referred to as “Prof Services”. The term
                  “Services” does not include the Prof Services. Quickaka does
                  not provide the Prof Services and is not responsible for their
                  provision. Service Professionals are solely liable and
                  responsible for the Prof Services that they offer or otherwise
                  provide through the Platform. Quickaka does not employ Service
                  Professionals, nor are Service Professionals agents,
                  contractors, or partners of Quickaka or its affiliates.
                  Service Professionals do not have the ability to bind or
                  represent Quickaka.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(c)</strong> The Platform is for your personal and
                  non-commercial use only, unless otherwise agreed upon on in
                  accordance with the terms of a separate agreement. Please note
                  that the Platform is intended for use only within India. You
                  agree that in the event you avail the Services or Prof
                  Services from a legal jurisdiction other than the territory of
                  India, you will be deemed to have accepted the Quickaka terms
                  and conditions applicable to that jurisdiction.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(d)</strong> The Services are made available under
                  various brands owned by or otherwise licensed to Quickaka and
                  its affiliates.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(e)</strong> A key part of the Services is QUICKAKA’s
                  ability to send you text messages, electronic mails, or
                  WhatsApp messages, including in connection with your bookings,
                  your utilization of the Services, or as a part of its
                  promotional and marketing strategies. While you may opt out of
                  receiving these text messages by contacting QUICKAKA at
                  privacy@quickaka.com or through the in-Platform settings, you
                  agree and acknowledge that this may impact QUICKAKA’s ability
                  to provide the Services (or a part of the Services) to you.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(f)</strong> In certain instances, you may be required
                  to furnish identification proof to avail the Services or the
                  Prof Services, and hereby agree to do so. A failure to comply
                  with this request may result in your inability to use the
                  Services or Prof Services.
                </p>
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-2">
                    <strong>(g)</strong> QUICKAKA Points:
                  </p>
                  <ul className="list-none pl-6 space-y-3">
                    <li>
                      <strong>(i)</strong> QUICKAKA may, in its sole discretion,
                      offer promotional codes that may be redeemed for Points,
                      other features or benefits related to the Services, and/or
                      Prof Services, subject to any additional terms that may
                      apply on a promotional code (“QUICKAKA Points”).
                    </li>
                    <li>
                      <strong>(ii)</strong> You agree that (i) you shall use
                      QUICKAKA Points in a lawful manner, and only for the
                      purposes specified by such QUICKAKA Points, (ii) you shall
                      not duplicate, sell, or transfer the QUICKAKA Points in
                      any manner (including by posting such codes on a public
                      forum) unless you have QUICKAKA’s express prior consent to
                      do so, (iii) QUICKAKA Points may be disabled by QUICKAKA
                      at any time for any reason without any liability to you,
                      (iv) QUICKAKA Points are not valid for cash, and (v)
                      QUICKAKA Points may expire prior to your use.
                    </li>
                    <li>
                      <strong>(iii)</strong> QUICKAKA may, at its sole
                      discretion, provide only certain users with QUICKAKA
                      Points that may result in different amounts charged for
                      the same or similar services obtained by other users.
                    </li>
                    <li>
                      <strong>(iv)</strong> QUICKAKA reserves the right to
                      withhold or deduct Points or other features or benefits
                      obtained through the use of QUICKAKA Points, by you or any
                      other user, if QUICKAKA reasonably determines or believes
                      that the use or redemption of the QUICKAKA Points was in
                      error, fraudulent, illegal, or in violation of the
                      applicable QUICKAKA Point terms or these Terms.
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                ACCOUNT CREATION
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> To avail the Services, you will be
                  required to create an account on the Platform (“Account”). For
                  this Account, you may be required to furnish certain details,
                  including but not limited to your phone number. To create an
                  Account, you must be at least 18 years of age.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(b)</strong> You warrant that all information
                  furnished in connection with your Account is and shall remain
                  accurate and true. You agree to promptly update your details
                  on the Platform in the event of any change to or modification
                  of this information.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(c)</strong> You are solely responsible for
                  maintaining the security and confidentiality of your Account
                  and agree to immediately notify us of any disclosure or
                  unauthorized use of your Account or any other breach of
                  security with respect to your Account.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(d)</strong> You are liable and accountable for all
                  activities that take place through your Account, including
                  activities performed by persons other than you. We shall not
                  be liable for any unauthorized access to your Account.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(e)</strong> You agree to receive communications from
                  us regarding (i) requests for payments, (ii) information about
                  us and the Services, (iii) promotional offers and services
                  from us and our third-party partners, and (iv) any other
                  matter in relation to the Services.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                USER CONTENT
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> Our Platform may contain interactive
                  features or services that allow users who have created an
                  account with us to post, upload, publish, display, transmit,
                  or submit comments, reviews, suggestions, feedback, ideas, or
                  other content on or through the Platform (“User Content”).
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(b)</strong> As part of the effective provision of the
                  Services and quality control purposes, we may request reviews
                  from you about Service Professionals and you agree and
                  acknowledge that Service Professionals may provide reviews
                  about you to us. You must not knowingly provide false,
                  inaccurate, or misleading information in respect of the
                  reviews. Reviews will be used by us for quality control
                  purposes and to determine whether Customers and Service
                  Professionals are appropriate users of the Platform. If we
                  determine at our sole discretion that you are not an
                  appropriate user, we reserve the right to cancel your
                  registration and remove you from our Platform.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(c)</strong> You grant us a non-exclusive, worldwide,
                  perpetual, irrevocable, transferable, sublicensable, and
                  royalty-free license to (i) use, publish, display, store,
                  host, transfer, process, communicate, distribute, make
                  available, modify, adapt, translate, and create derivative
                  works of, the User Content, for the functioning of, and in
                  connection with, the Services and (ii) use User Content for
                  the limited purposes of advertising and promoting the
                  Services, or furnishing evidence before a court or authority
                  of competent jurisdiction under applicable laws.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(d)</strong> In connection with these Terms and the
                  licenses granted under this clause, you hereby waive any
                  claims arising out of any moral rights or other similar rights
                  relating to the User Content.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(e)</strong> You agree and acknowledge that QUICKAKA
                  may, without notice to you, remove, or otherwise restrict
                  access to User Content that, in its sole discretion, violates
                  these Terms.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                CONSENT TO USE DATA
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> You agree that we may, in accordance with
                  our Privacy Policy, collect and use your personal data. The
                  Privacy Policy is available at
                  https://www.quickaka.com/privacy-policy and it explains the
                  categories of personal data that we collect or otherwise
                  process about you and the manner in which we process such
                  data.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(b)</strong> In addition to any consent you may
                  provide pursuant to the Privacy Policy, you hereby consent to
                  us sharing your information with our affiliates or other
                  third-party service providers. We may use information and data
                  pertaining to your use of the Services for provision of the
                  Services, analytics, trend identification, and purposes of
                  statistics to further enhance the effectiveness and efficiency
                  of our Services, and provision of beneficial schemes, new
                  offers, and for experience enhancement.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(c)</strong> Subject to applicable laws, we may be
                  directed by law enforcement agencies or the government and
                  related bodies to disclose data in relation to you in
                  connection with criminal or civil proceedings. You understand
                  and agree that in such instances we shall have the right to
                  share such data with relevant agencies or bodies.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                BOOKINGS
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> Orders: The Platform permits you to
                  request various Prof Services at a time of your choosing based
                  on available slots. To make a booking, you should follow the
                  instructions on the Platform and provide necessary
                  information. We use reasonable efforts to enable you to find a
                  Service Professional who is able to provide that service at
                  the requested time. If, in the unlikely event we cannot find a
                  Service Professional for the specific timeslot, we will
                  contact you to find an alternative time.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(b)</strong> Confirmation: Once you place a request we
                  will provide confirmation of the booking via SMS, email or a
                  push notification. Once your booking has been confirmed, you
                  will be required to make the payment in accordance with these
                  Terms or as indicated on the Platform. Once a Service
                  Professional has been identified for the requested Prof
                  Services, you shall receive confirmation in App or via SMS,
                  WhatsApp, call, email or a push notification.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(c)</strong> Cancellations: Bookings that are
                  cancelled before confirmation on the Platform will not be
                  charged. QUICKAKA’s cancellation policy sets out applicable
                  cancellation fees.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(d)</strong> Substitution: In case of the
                  unavailability of, or cancellation by a selected Service
                  Professional, we will offer you a substitute of the Service
                  Professional from among our registered Service Professionals.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                PRICING, FEES, AND PAYMENT TERMS
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> QUICKAKA reserves the right to charge you
                  for the different Services you may avail and/or for any other
                  facilities you may opt for, from time to time, on or via the
                  Platform.
                </p>
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-2">
                    <strong>(b)</strong> Charges and Fees in respect of Prof
                    Services:
                  </p>
                  <ul className="list-none pl-6 space-y-3">
                    <li>
                      <strong>(i)</strong> In respect of Prof Services that you
                      seek to avail through the Platform, you shall be required
                      to pay Service Professionals the amount indicated at the
                      time of booking as well as amounts towards (a) any
                      additional Prof Services you may avail, (b) out of pocket
                      expenses incurred by the Service Professional, and (c)
                      expenses arising out of the purchase of goods required or
                      utilized for the performance of the Prof Service
                      (“Charges”). In addition to the Charges payable to Service
                      Professionals, QUICKAKA reserves the right to charge you a
                      convenience fee for facilitating the booking and
                      transferring payments to the Service Professional (this
                      fee is referred to as “Fees”). You acknowledge that the
                      final bill you receive may include additional charges,
                      including without limitation, a safety fee, warranty fee,
                      insurance fee, or Service Professional welfare fee.
                    </li>
                    <li>
                      <strong>(ii)</strong> QUICKAKA shall notify you of the
                      applicable Charges, Fees, and payment methods at the time
                      of booking. Generally, you may make payments for Prof
                      Services through credit cards, debit cards, net banking,
                      wallets, UPI or cash upon completion of the Prof Service.
                      We have the right to modify and otherwise restrict the
                      modes of payment available to you. You acknowledge that
                      certain payment methods such as cash upon completion may
                      not always be available to you as a payment method. For
                      the avoidance of doubt, in the event you pay through the
                      method of ‘cash upon completion’, you acknowledge that you
                      will be required to pay both Charges and Fees to the
                      Service Professional.
                    </li>
                    <li>
                      <strong>(iii)</strong> The Charges and Fees may be payable
                      at the time of making a booking, or upon the completion of
                      the Prof Service, as specified by QUICKAKA.
                    </li>
                    <li>
                      <strong>(iv)</strong> For the avoidance of doubt, please
                      note that the Charges are payable to Service
                      Professionals, and QUICKAKA acts as a limited collection
                      agent on behalf of such Service Professionals to collect
                      and transfer amounts due to them.
                    </li>
                    <li>
                      <strong>(v)</strong> Taxes: All Charges and Fees are
                      inclusive of applicable taxes.
                    </li>
                    <li>
                      <strong>(vi)</strong> QUICKAKA reserves the right to
                      reasonably amend the Charges and Fees at any time at its
                      sole discretion. A change in Fees shall not impact any
                      bookings that have been confirmed before the publication
                      of the revised Fees on the Platform.
                    </li>
                    <li>
                      <strong>(vii)</strong> Charges and Fees that you pay are
                      final and non-refundable, unless otherwise determined by
                      QUICKAKA or required by the applicable laws. Under certain
                      laws, you may be entitled to a refund or other remedies
                      for a failure in the provision of the Services.
                    </li>
                    <li>
                      <strong>(viii)</strong> You acknowledge and agree that
                      Charges and Fees applicable in certain geographical areas
                      may increase substantially during times of high demand.
                      QUICKAKA will use reasonable efforts to inform you of the
                      Charges and Fees that may apply. However, by using the
                      Prof Services or Services, you will be responsible for the
                      Charges and Fees incurred under your Account regardless of
                      your awareness of such Charges or Fees.
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(c)</strong> Payment Processors: We may use a
                  third-party payment processor (“Payment Processor”) to bill
                  you through your selected mode of payment. The processing of
                  payments will be subject to the terms and policies of such
                  Payment Processor in addition to these Terms. We shall not be
                  liable for any error of the Payment Processor. In the event of
                  any unsuccessful payment, the money debited shall be credited
                  in accordance with the terms of the Payment Processor.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(d)</strong> Cancellation: You may elect to cancel
                  your request for services from a Service Professional at any
                  time prior to such Service Professional’s arrival, in which
                  case you may be charged a cancellation fee in accordance with
                  QUICKAKA’s cancellation policy. QUICKAKA reserves the right to
                  charge you, or otherwise deduct applicable taxes in respect of
                  such cancellation fee.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(e)</strong> Subscriptions: QUICKAKA may from time to
                  time offer subscription packages (howsoever named) for
                  monetary consideration. The packages shall provide Customers
                  with additional benefits, which may include the ability to
                  avail discounted Pro Services. You agree that subscription
                  packages (howsoever named) shall be subject to additional
                  terms and conditions. You acknowledge that such subscription
                  packages will be subject to additional terms and conditions
                  that will be deemed to be an integral part of these Terms.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(f)</strong> QUICKAKA does not designate any portion
                  of your payment as a tip or gratuity to the Service
                  Professional. Any representation by QUICKAKA to the effect
                  that tipping is “voluntary”, “not required”, and/or “included”
                  in the payments you make for Prof Services is not intended to
                  suggest that QUICKAKA provides any additional payments to
                  Service Professionals. You understand and agree that while you
                  are free to provide additional payment as a gratuity to any
                  Service Professional who provides you with Prof Services, you
                  are under no obligation to do so. Gratuities are voluntary.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                CUSTOMER CONDUCT
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> QUICKAKA prohibits discrimination against
                  Service Professionals, including on the basis of race,
                  religion, caste, national origin, disability, sexual
                  orientation, sex, marital status, gender identity, age, or any
                  other characteristic that may be protected under applicable
                  law. Such discrimination includes but is not limited to any
                  refusal to accept Prof Services based on any of these
                  characteristics.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  <strong>(b)</strong> We request that you treat all Service
                  Professionals with courtesy and respect, and that you provide
                  them with a safe, clean, and appropriate location to perform
                  the Prof Services. Service Professionals shall be entitled to
                  refuse to perform Prof Services if you have not provided a
                  safe, clean, and appropriate location for them, or you behave
                  towards them in a manner which is discourteous, disrespectful,
                  abusive, or otherwise inappropriate. We reserve the right to
                  withhold access to the Services and otherwise limit your
                  access to Prof Services at our absolute discretion if you
                  behave towards any Service Professional in a manner which is
                  discourteous, disrespectful, or abusive, or which we otherwise
                  deem to be inappropriate or unlawful.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  <strong>(c)</strong> You agree that you will be liable for
                  discriminating against Service Professionals or for any
                  failure, intentional or otherwise, to provide the Service
                  Professionals a safe, clean, and appropriate location for them
                  to perform the Prof Services. Additionally, you will also
                  disclose any and all information that may have a bearing on
                  the ability of the Service Professional to perform the Prof
                  Services or impact the Services Professional’s health, safety,
                  or well-being, to QUICKAKA and the Service Professional.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  <strong>(d)</strong> You agree that in the event a Service
                  Professional behaves in a manner that is discourteous,
                  disrespectful, abusive, inappropriate, or in violation of the
                  law, you shall be required to report such incident to
                  sales@gsenterprise.org.in at the earliest but in any event
                  within 48 (forty-eight) hours of such incident.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                THIRD PARTY SERVICES
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> The Platform may include services,
                  content, documents, and information owned by, licensed to, or
                  otherwise made available by, a third party (“Third Party
                  Services”) and contain links to Third Party Services. You
                  understand and acknowledge that Third Party Services are the
                  sole responsibility of the third party that created or
                  provided it and that use of such Third-Party Services is
                  solely at your own risk.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  <strong>(b)</strong> We make no representations and exclude
                  all warranties and liabilities arising out of or pertaining to
                  such Third-Party Services, including their accuracy or
                  completeness. Should you avail a Third-Party Service, you
                  shall be governed and bound by the terms and conditions and
                  privacy policy of the third parties providing the Third-Party
                  Services. Further, all intellectual property rights in and to
                  Third Party Services are the property of the respective third
                  parties.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                YOUR RESPONSIBILITIES
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> You represent and warrant that all
                  information that you provide in relation to the Services and
                  Prof Services is complete, true, and correct on the date of
                  agreeing to these Terms and shall continue to be complete,
                  true, and correct while you avail the Services and/or the Prof
                  Services. Should any information that you provide change
                  during the existence of these Terms, you undertake to
                  immediately bring such change to our notice. We do not accept
                  any responsibility or liability for any loss or damage that
                  you may suffer or incur if any information, documentation,
                  material, or data, provided to avail the Services is
                  incorrect, incomplete, inaccurate, or misleading or if you
                  fail to disclose any material fact.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  <strong>(b)</strong> You shall extend all cooperation to us in
                  our defence of any proceedings that may be initiated against
                  us due to a breach of your obligations or covenants under
                  these Terms.
                </p>

                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-2">
                    <strong>(c)</strong> In respect of the User Content, you
                    represent and warrant that:
                  </p>
                  <ul className="list-none pl-6 space-y-3">
                    <li>
                      <strong>(i)</strong> You own all intellectual property
                      rights (or have obtained all necessary permissions) to
                      provide User Content and to grant the licenses under these
                      Terms.
                    </li>
                    <li>
                      <strong>(ii)</strong> You are solely responsible for all
                      activities that occur on or through your account on the
                      Platform and all User Content.
                    </li>
                    <li>
                      <strong>(iii)</strong> The User Content does not and shall
                      not violate any of your obligations or responsibilities
                      under other agreements.
                    </li>
                    <li>
                      <strong>(iv)</strong> The User Content does not and shall
                      not violate, infringe, or misappropriate any intellectual
                      property right or other proprietary right including the
                      right of publicity or privacy of any person or entity.
                    </li>
                    <li>
                      <strong>(v)</strong> The User Content does not and shall
                      not contain any viruses, corrupted data, or other harmful,
                      disruptive, or destructive files or content.
                    </li>
                    <li>
                      <strong>(vi)</strong> The User Content does not and shall
                      not violate any third-party rights.
                    </li>
                    <li>
                      <strong>(vii)</strong> The User Content:
                      <ul className="list-none pl-6 space-y-3 mt-1">
                        <li>
                          <strong>•</strong> Does not belong to any other person
                          to which you do not have any right,
                        </li>
                        <li>
                          <strong>•</strong> Does not threaten the unity,
                          integrity, defence, security or sovereignty of India,
                          friendly relations with foreign states, public order,
                          cause incitement to the commission of any cognizable
                          offence, prevents investigation of any offence, or is
                          insulting another nation,
                        </li>
                        <li>
                          <strong>•</strong> Is not defamatory, grossly harmful,
                          blasphemous, paedophilic, invasive of another’s
                          privacy, discriminatory based on gender, ethnically
                          objectionable, disparaging, relating to, or
                          encouraging money laundering or gambling, libelous,
                          hateful, racist, violent, obscene, pornographic,
                          unlawful, harmful to children, or
                        </li>
                        <li>
                          <strong>•</strong> Otherwise, offensive,
                          objectionable, or restricts, or inhibits, any other
                          person from using or enjoying the Services.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-2">
                    <strong>(d)</strong> You shall not use the Services in any
                    manner except as expressly permitted in these Terms. Without
                    limiting the generality of the preceding sentence, you shall
                    not:
                  </p>
                  <ul className="list-none pl-6 space-y-3">
                    <li>
                      <strong>(i)</strong> Infringe any proprietary rights,
                      including but not limited to copyrights, patents,
                      trademarks, or trade secrets of any party.
                    </li>
                    <li>
                      <strong>(ii)</strong> Except as may be provided hereunder,
                      copy, display, distribute, modify, publish, reproduce,
                      store, transmit, post, translate, create any derivative
                      works from or license the Services.
                    </li>
                    <li>
                      <strong>(iii)</strong> Use the Services to transmit any
                      data, or send or upload any material that contains
                      viruses, Trojan horses, worms, timebombs, keystroke
                      loggers, spyware, adware, or any other harmful programs,
                      or similar computer code, designed to adversely affect the
                      operation of any computer software or hardware.
                    </li>
                    <li>
                      <strong>(iv)</strong> Use any robot, spider, other
                      automated device, or manual process to monitor or copy the
                      Services or any portion thereof.
                    </li>
                    <li>
                      <strong>(v)</strong> Engage in the systematic retrieval of
                      content from the Services to create or compile, directly
                      or indirectly, a collection, compilation, database, or
                      directory.
                    </li>
                    <li>
                      <strong>(vi)</strong> Use the Services in:
                      <ul className="list-none pl-6 space-y-3 mt-1">
                        <li>
                          <strong>•</strong> Any unlawful manner.
                        </li>
                        <li>
                          <strong>•</strong> For fraudulent or malicious
                          activities.
                        </li>
                        <li>
                          <strong>•</strong> In any manner inconsistent with
                          these Terms.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>(vii)</strong> Decompile, reverse engineer, or
                      disassemble the Services.
                    </li>
                    <li>
                      <strong>(viii)</strong> Link to, mirror, or frame, any
                      portion of all or any of the Services.
                    </li>
                    <li>
                      <strong>(ix)</strong> Violate applicable laws in any
                      manner.
                    </li>
                  </ul>
                </div>

                <p className="mb-2">
                  <strong>(e)</strong> You warrant that you shall not engage in
                  any activity that interferes with or disrupts the Services.
                </p>

                <p className="mb-2">
                  <strong>(f)</strong> You shall not attempt to gain
                  unauthorized access to any portion or feature of the Services,
                  any other systems or networks connected to the Services, to
                  any of our servers, or through the Platform by hacking,
                  password mining, or any other illegitimate means.
                </p>

                <p className="mb-2">
                  <strong>(g)</strong> You shall not directly or indirectly, in
                  any capacity, solicit, attempt to influence, engage, approach,
                  or accept or encourage the solicitations or approach of, a
                  Service Professional from whom you have availed Prof Services,
                  to either terminate or otherwise cease their registration on
                  or engagement with the Platform, or avail services the same as
                  or similar to the Prof Services independently, without booking
                  the Prof Services through your Account. You agree that this
                  limitation is reasonable and fair and is necessary for the
                  protection of the privacy and security of Service
                  Professionals and that this will not preclude you from
                  obtaining services the same as or similar to the Prof Services
                  through the Platform or other means. You further agree that
                  any potential harm to Service Professionals from the
                  non-enforcement of this clause far outweighs any potential
                  harm to you.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                OUR INTELLECTUAL PROPERTY
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> All rights, titles, and interest in, and
                  to the Services, including all intellectual property rights
                  arising out of the Services, are owned by or otherwise
                  licensed to us. Subject to compliance with these Terms, we
                  grant you a non-exclusive, non-transferable, non-sub
                  licensable, revocable, and limited license to use the Services
                  in accordance with these Terms and our written instructions
                  issued from time to time. Any rights not expressly granted
                  herein are reserved by QUICKAKA or QUICKAKA’s licensors.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(b)</strong> We may request you to submit suggestions
                  and other feedback, including bug reports, relating to the
                  Services from time to time (“Feedback”). We may freely use,
                  copy, disclose, publish, display, distribute, and exploit the
                  Feedback we receive from you without any payment of royalty,
                  acknowledgement, prior consent, or any other form of
                  restriction arising out of your intellectual property rights.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(c)</strong> Except as expressly stated in these
                  Terms, nothing in these Terms should be construed as
                  conferring any right in, or license to, our or any third
                  party’s intellectual property rights.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                TERM AND TERMINATION
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> These Terms shall remain in effect unless
                  terminated in accordance with the terms hereunder.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(b)</strong> We may restrict, deactivate, or terminate
                  your access to, or use of, the Services, or any portion
                  thereof, (i) immediately and at any point at our sole
                  discretion, (A) if you violate or breach any of the
                  obligations, responsibilities, or covenants under these Terms,
                  (B) when you cease to become a user of our Services, (C) you
                  do not, or are likely not to qualify under applicable law, or
                  the standards and policies of QUICKAKA or its affiliates, to
                  access and use the Services, or (D) violate or breach the
                  Community Guidelines, (ii) upon 30 (Thirty) days’ prior
                  written notice to you, or (iii) immediately for any legitimate
                  business, legal, or regulatory reason.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(c)</strong> You may terminate these Terms, at any
                  time, for any reason by sending a notice to QUICKAKA at
                  sales@gsenterprise.org.in
                </p>
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-2">
                    <strong>(d)</strong> Upon termination of these Terms:
                  </p>
                  <ul className="list-none pl-6 space-y-3">
                    <li>
                      <strong>(i)</strong> the Account will expire;
                    </li>
                    <li>
                      <strong>(ii)</strong> the Services will “time-out”; and
                    </li>
                    <li>
                      <strong>(iii)</strong> these Terms shall terminate, except
                      for those clauses that are expressly, or by implication,
                      intended to survive termination or expiry.
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                DISCLAIMERS AND WARRANTIES
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> The Services are provided on an “as is”
                  basis without warranty of any kind, express, implied,
                  statutory or otherwise, including without limitation the
                  implied warranties of title, non-infringement,
                  merchantability, or fitness for a particular purpose. Without
                  limiting the foregoing, we make no warranty that the Services
                  will meet your requirements or expectations.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(b)</strong> No advice or information, whether oral or
                  written, obtained by you from us shall create any warranty
                  that is not expressly stated in the Terms.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(c)</strong> While QUICKAKA strives to provide
                  accurate information about Prof Services and Charges, pricing
                  errors may occur from time to time.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(d)</strong> You agree and acknowledge that we are
                  merely a Platform that connects you with Service
                  Professionals, and we shall not be liable in any manner for
                  any obligations that have not been explicitly stated in these
                  Terms. We are not liable or responsible for fulfilment of any
                  bookings, for the performance of the Prof Services by any
                  Service Professional, or for any acts or omissions of the
                  Service Professionals during their provision of the Prof
                  Services including any damage they may cause to property. By
                  booking Prof Services through the Platform, you are entering
                  into a contract with the relevant Service Provider for the
                  provision of those services, and we accept no responsibility
                  or liability, nor do we make any warranty, representation, or
                  guarantee in respect of the Service Professional’s performance
                  under that contract.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(e)</strong> You agree and acknowledge that soliciting
                  or receiving services from any Service Professional
                  independently is solely at your own risk, and in such an
                  event, you waive any rights that you may have under these
                  Terms.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(f)</strong> We do not guarantee or warrant and we
                  make no representation whatsoever regarding the reliability,
                  quality, or suitability of the Service Professionals.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(g)</strong> You hereby accept full responsibility for
                  any consequences that may arise from your use of the Services
                  and Prof Services, and expressly agree and acknowledge that we
                  shall have absolutely no liability in this regard.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(h)</strong> QUICKAKA will maintain a complaints
                  management framework and will manage this framework on behalf
                  of Service Professionals in a reasonable manner and in
                  accordance with the non-excludable requirements of relevant
                  applicable laws.
                </p>
                <div className="text-gray-600 leading-relaxed">
                  <p className="mb-2">
                    <strong>(i)</strong> To the fullest extent permissible by
                    law, we, our affiliates, and our related parties, each
                    disclaim all liability for any loss or damage arising out
                    of, or due to:
                  </p>
                  <ul className="list-none pl-6 space-y-3">
                    <li>
                      <strong>(i)</strong> your use of, inability to use, or
                      availability or unavailability of the Services or the Prof
                      Services;
                    </li>
                    <li>
                      <strong>(ii)</strong> the occurrence or existence of any
                      defect, interruption, or delays, in the operation or
                      transmission of information to, from, or through the
                      Services, communications failure, theft, destruction, or
                      unauthorized access to our records, programs, services,
                      servers, or other infrastructure relating to the Services;
                    </li>
                    <li>
                      <strong>(iii)</strong> the failure of the Services to
                      remain operational for any period of time; and
                    </li>
                    <li>
                      <strong>(iv)</strong> the loss of any User Content and any
                      other data in connection with your use of the Services.
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(j)</strong> In no event shall QUICKAKA, its founders,
                  officers, directors, and employees, or its contractors,
                  agents, licensors, partners, or suppliers, be liable to you
                  for any direct, special, indirect, incidental, consequential,
                  punitive, reliance, or exemplary damages (including without
                  limitation, lost business opportunities, lost revenues, or
                  loss of anticipated profits or any other pecuniary or
                  non-pecuniary loss or damage of any nature whatsoever,
                  including but not limited to any abuse or breach of data),
                  even if QUICKAKA or an authorized representative had been
                  advised of the possibility of such damages, arising out of, or
                  relating to (A) these Terms, (B) the Services or the Prof
                  Services, (C) your use or inability to use the Services or the
                  Prof Services, or (D) any other interactions with another user
                  of the Services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(k)</strong> To the maximum extent permitted by law,
                  our liability shall be limited to the amount of commission we
                  receive in respect of a particular booking made on the
                  Platform. In no event shall our total liability to you in
                  connection with these Terms exceed INR 10,000 (Rupees Ten
                  Thousand).
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(l)</strong> Nothing in these Terms will exclude or
                  limit any warranty implied by law that it would be unlawful to
                  exclude or limit.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                INDEMNITY
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  You shall indemnify, defend at our option, and hold us, our
                  parent companies, founders, subsidiaries, affiliates, and our
                  officers, employees, directors, agents, and representatives,
                  harmless from and against any claim, demand, lawsuits,
                  judicial proceeding, losses, liabilities, damages, and costs
                  (including, without limitation, all damages, liabilities,
                  settlements, and attorneys’ fees), due to or arising out of
                  your access to the Services or Prof Services, use of the
                  Services or Prof Services, violation of these Terms, or any
                  violation of these Terms by any third party who may use your
                  Account.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                JURISDICTION, GOVERNING LAWS, AND DISPUTE RESOLUTION
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> These Terms shall be governed by and
                  construed and enforced in accordance with the laws of India.
                  Subject to other provisions in this clause, courts in New
                  Delhi shall have exclusive jurisdiction over all issues
                  arising out of these Terms or the use of the Services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(b)</strong> Any controversies, conflicts, disputes,
                  or differences, arising out of these Terms shall be resolved
                  by arbitration in New Delhi in accordance with the Arbitration
                  and Conciliation Act, 1996 for the time being in force, which
                  is deemed to be incorporated by reference in this clause. The
                  tribunal shall consist of 1 (One) arbitrator appointed by
                  QUICKAKA. The language of the arbitration shall be English.
                  The parties to the arbitration shall keep the arbitration
                  confidential, and not disclose to any person, other than on a
                  need-to-know basis, or to legal advisors, unless required to
                  do so by law. The decision of the arbitrator shall be final
                  and binding on all the parties thereto. Each party to the
                  arbitration shall bear its own costs with respect to any
                  dispute.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                GRIEVANCE REDRESSAL
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> You may contact our designated Grievance
                  Redressal Officer with any complaints or queries relating to
                  the Services or these Terms through registered post or through
                  email, details of which are provided below:
                </p>
                <div className="text-gray-600 leading-relaxed pl-6">
                  <p>Name: Sudeep Verma</p>
                  <p>Designation: Director</p>
                  <p>Email Address: sales@gsenterprise.org.in</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(b)</strong> We shall ensure that your complaint is
                  resolved within timelines prescribed by applicable laws.
                </p>
              </div>

              <h2 className="font-heading text-2xl font-bold text-primary mt-12 mb-6">
                MISCELLANEOUS PROVISIONS
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  <strong>(a)</strong> Changes to Terms: The Terms are subject
                  to revisions at any time, as determined by us, and all changes
                  are effective immediately upon being posted on the Platform.
                  It is your responsibility to review these Terms periodically
                  for any updates or changes. You will be deemed to have
                  accepted the changes made to these Terms if you continue to
                  use the Platform once it has been posted.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(b)</strong> Modification to the Services: We reserve
                  the right at any time to add, modify, or discontinue,
                  temporarily or permanently, the Services (or any part
                  thereof), with or without cause. We shall not be liable for
                  any such addition, modification, suspension, or
                  discontinuation of the Services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(c)</strong> Severability: If any provision of these
                  Terms is determined by any court or other competent authority
                  to be unlawful or unenforceable, the other provisions of these
                  Terms will continue to be in effect. If any unlawful or
                  unenforceable provision would be lawful or enforceable if a
                  part of it were deleted, that part will be deemed to be
                  deleted, and the rest of the provision will continue in effect
                  (unless that would contradict the clear intention of the
                  clause, in which case the entirety of the relevant provision
                  will be deemed to be deleted).
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(d)</strong> Assignment: You shall not license, sell,
                  transfer, or assign your rights, obligations, or covenants
                  under these Terms, or your Account in any manner without our
                  prior written consent. We may grant or withhold this consent
                  at our sole discretion, subject to any conditions we deem
                  appropriate. We may assign our rights to any of our
                  affiliates, subsidiaries, or parent companies, any successor
                  in interest of any business associated with the Services, or
                  any third party without any prior notice to you.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(e)</strong> Notices: All notices, requests, demands,
                  and determinations for us under these Terms (other than
                  routine operational communications) shall be sent to
                  sales@gsenterprise.org.in
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(f)</strong> Third Party Rights: No third party shall
                  have any rights to enforce any terms contained herein.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>(g)</strong> Force Majeure: We shall have no liability
                  to you if we are prevented from or delayed in performing our
                  obligations, or from carrying on our business, by acts,
                  events, omissions, or accidents beyond our reasonable control,
                  including without limitation, strikes, failure of a utility
                  service or telecommunications network, act of God, war, riot,
                  civil commotion, malicious damage, or compliance with any law
                  or governmental order, rule, regulation, or direction.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TermsPage;
