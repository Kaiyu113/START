export interface MenuItemFollowCompTypes {
  user: RandomUsers;
}

export interface PostWithProfile {
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
}

export interface Like {
  id: string;
  user_id: string;
  image: string;
}

export interface RandomUsers {
  id: string;
  name: string;
  post_id: string;
}
//component type
export interface PostMainCompTypes {
  post: PostWithProfile;
}

export interface PostMainLikeCompTypes {
  post: PostWithProfile;
}

// LAYOUT INCLUDE TYPES
export interface MenuItemTypes {
  iconString: string;
  colorString: string;
  sizeString: string;
}
