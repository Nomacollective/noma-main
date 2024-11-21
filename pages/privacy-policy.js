import Layout from "@/components/common/Layout";
import { DownloadIcon } from '@heroicons/react/outline';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="max-w-[1000px] m-auto terms-conditions px-4">
        <h1>Privacy Policy</h1>

        <p>
          At Noma Collective, we value your privacy and understand the
          importance of protecting your personal information. This privacy
          policy explains how we collect, use, and disclose personal information
          that you provide to us when you register for our Free Eligibility
          Quiz.
        </p>

        <h2>Information Collection</h2>
        <p>
          When you take our eligibility quiz, we will ask you to provide certain
          personal information, including your name, email address, phone
          number, and other contact information. We may also collect other
          information about you, such as your work experience and skills, if you
          choose to provide this information.
        </p>

        <h2>Use of Information</h2>
        <p>
          We use the information that you provide to us to determine your
          eligibility for remote work opportunities and to contact you with
          important information about our services. We may also use the
          information to contact you after the quiz to follow up on your
          experience, and to provide you with information about other events or
          services that we offer that may be of interest to you.
        </p>

        <h2>Disclosure of Information</h2>
        <p>
          We will not disclose your personal information to third parties
          without your consent, except as necessary to determine your
          eligibility or as required by law. We may share your information with
          our partners and sponsors who are involved with the quiz. We will not
          sell or rent your personal information to any third party.
        </p>

        <h2>Security</h2>
        <p>
          We take reasonable steps to protect the personal information that you
          provide to us from unauthorized access, use, or disclosure. However,
          no method of transmission over the internet, or method of electronic
          storage, is 100% secure, and we cannot guarantee the absolute security
          of your personal information.
        </p>

        <h2>Changes to this Policy</h2>
        <p>
          We may update this privacy policy from time to time to reflect changes
          to our information practices. We will notify you of any material
          changes to this policy by posting the new policy on our website.
        </p>

        <p>
          If you have any questions or concerns about our privacy policy or the
          personal information that we collect, please contact us by email at{" "}
          <a href="mailto:info@noma-collective.com">info@noma-collective.com</a>
          .
        </p>

        <h2>Cookies Policy</h2>

        <p className="text-main-orange group hover:text-[#000]">
          <a href="Noma_Cookies_Policy.pdf" download className="flex flex-row gap-1 hover:text-[#000] group-hover:underline">
            <span className="text-orange-500 group-hover:text-[#000]">Find out about our cookies policy</span>
            <DownloadIcon className="h-5 w-5 text-orange-500 group-hover:text-[#000]" />
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
