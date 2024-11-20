"use client";

interface ProfilePictureProps {
  src: string;
}
interface ProfileDetailProps {
  name: string;
  email: string;
}
interface ContactButtonProps {
  onClick: () => void;
}
interface UserProfileCardProps {
  user: {
    profilePicture: string;
    name: string;
    email: string;
  };
  onContactClick: () => void;
}

const ProfilePicture = ({ src }: ProfilePictureProps) => {
  return (
    <img
      src={src}
      alt="Profile"
      className="w-24 h-24 border-2 border-gray-300 rounded-full"
    />
  );
};

const ProfileDetails = ({ name, email }: ProfileDetailProps) => {
  return (
    <div className="text-left">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm text-gray-600">{email}</p>
    </div>
  );
};

const ContactButton = ({ onClick }: ContactButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
    >
      Contact
    </button>
  );
};

const UserProfileCard = ({ user, onContactClick }: UserProfileCardProps) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded shadow-lg">
      <ProfilePicture src={user.profilePicture} />
      <ProfileDetails name={user.name} email={user.email} />
      <ContactButton onClick={onContactClick} />
    </div>
  );
};

export default UserProfileCard;
