export type MenuItemFollowCompTypes = {
  user: RandomUsers;
};

export interface UserContextTypes {
  user: User | null;
  register: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkUser: () => Promise<void>;
}

export interface User {
  id: string;
  name: string;
  bio: string;
  image: string;
}

export interface ShowErrorObject {
  type: string;
  message: string;
}

export interface Profile {
  id: string;
  user_id: string;
  name: string;
  image: string;
  bio: string;
}

export interface CommentWithProfile {
  id: string;
  user_id: string;
  post_id: string;
  text: string;
  created_at: string;
  profile: {
    user_id: string;
    name: string;
    image: string;
  };
}

export interface CropperDimensions {
  height?: number | null;
  width?: number | null;
  left?: number | null;
  top?: number | null;
}

export interface PostType {
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

export interface ShowErrorObject {
  type: string;
  message: string;
}

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
  post: PostType;
}

export interface TextInputCompTypes {
  string: string;
  inputType: string;
  placeholder: string;
  onUpdate: (newValue: string) => void;
  error: string;
}

export interface PostPageTypes {
  params: { userId: string; postId: string };
}

export interface CommentsCompTypes {
  params: { userId: string; postId: string };
}

export interface CommentsHeaderCompTypes {
  params: { userId: string; postId: string };
  post: PostWithProfile;
}

export interface SingleCommentCompTypes {
  params: { userId: string; postId: string };
  comment: CommentWithProfile;
}
