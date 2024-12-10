"use client"
import Link from 'next/link';
import { JSX } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

interface SocialItem {
  icon: JSX.Element; // النوع المناسب للأيقونات
  path: string; // الرابط كـ string
}

const socials: SocialItem[] = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/hadilyahi'
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/hadil-yahi-0487912a6/'
  },
  {
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/hadil.yh404/'
  },
  {
    icon: <FaFacebook />,
    path: 'https://www.facebook.com/profile.php?id=100087885432772'
  },
];

interface SocialProps {
  containerStyles?: string; 
  iconStyles?: string; 
}

const Social: React.FC<SocialProps> = ({ containerStyles = '', iconStyles = '' }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} target="_blank" rel="noopener noreferrer">
          <span className={iconStyles}>{social.icon}</span>
        </Link>
      ))}
    </div>
  );
};

export default Social;
