import { DownloadButton } from '../../shared';

const DownloadSection = () => {
  return (
    <section className="py-12 px-4 bg-[#F1EFEC] text-[#123458]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Curious to find out more about me?</h2>
        <p className="text-lg mb-6">
          You can download my CV below to learn more about my background, experience, and skills.
        </p>
        <DownloadButton path="cv/cv.pdf" label="Download CV" />
      </div>
    </section>
  );
}

export { DownloadSection }
