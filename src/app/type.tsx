export type MenuItemFollowCompTypes = {
  user: RandomUsers;
};

export interface User {
  id: string;
  name: string;
  bio: string;
  image: string;
}

export interface Post {
  id: string;
  user_id: string;
  video_url: string;
  text: string;
  created_at: string;
}

export type PostWithProfile = {
  id: string;
  user_id: string;
  video_url: string;
  text: string;
  created_at: string;
  profile: {
    user_id: string;
    name: string;
    image: string;
  };
};

export type UploadError = {
  type: string;
  message: string;
};

export type Comment = {
  id: string;
  user_id: string;
  post_id: string;
  text: string;
  created_at: string;
};

export type Like = {
  id: string;
  user_id: string;
  image: string;
};

export type RandomUsers = {
  id: string;
  name: string;
  post_id?: string;
  image?: string;
};
//component type
export type PostMainCompTypes = {
  post: PostWithProfile;
};

export type PostMainLikeCompTypes = {
  post: PostWithProfile;
};

// LAYOUT INCLUDE TYPES
export type MenuItemTypes = {
  iconString: string;
  colorString: string;
  sizeString: string;
};

export interface ProfilePageTypes {
  params: { id: string };
}

export interface PostUserCompTypes {
  post: Post;
}
