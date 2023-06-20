import { UilInstagram } from '@iconscout/react-unicons';
import { UilFacebook } from '@iconscout/react-unicons';

const SocialMedia = () => {
  return (
    <div className="flex justify-center items-center gap-5 text-white">
      <a href="https://www.instagram.com/zajfit_fight/">
        <UilInstagram />
      </a>

      <a href="https://www.facebook.com/profile.php?id=100088750616292">
        <UilFacebook />
      </a>
    </div>
  );
};

export default SocialMedia;
