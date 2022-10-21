export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions {}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email?: any;
}

export interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio?: any;
  location?: any;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface Exif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

export interface Position {
  latitude?: any;
  longitude?: any;
}

export interface Location {
  name?: any;
  city?: any;
  country?: any;
  position: Position;
}

export interface Meta {
  index: boolean;
}

export interface Type {
  slug: string;
  pretty_slug: string;
}

export interface Category {
  slug: string;
  pretty_slug: string;
}

export interface Subcategory {
  slug: string;
  pretty_slug: string;
}

export interface Ancestry {
  type: Type;
  category: Category;
  subcategory: Subcategory;
}

export interface CoverPhotoUlrs {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface CoverPhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Spirituality {
  status: string;
  approved_on: Date;
}

export interface TexturesPatterns {
  status: string;
  approved_on: Date;
}

export interface CoverPhotoTopicSubmissions {
  spirituality: Spirituality;
  texturespatterns: TexturesPatterns;
}

export interface CoverPhotoUserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface CoverPhotoUserProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface CoverPhotoUserSocial {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email?: any;
}

export interface CoverPhotoUser {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: CoverPhotoUserLinks;
  profile_image: CoverPhotoUserProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: CoverPhotoUserSocial;
}

export interface CoverPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at?: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: CoverPhotoUlrs;
  links: CoverPhotoLinks;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: CoverPhotoTopicSubmissions;
  user: CoverPhotoUser;
}

export interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto;
}

export interface Tag {
  type: string;
  title: string;
  source: Source;
}

export interface Links5 {
  self: string;
  html: string;
  photos: string;
  related: string;
}

export interface ResultUserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ResultUserProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface ResultUserSocial {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email?: any;
}

export interface ResultUser {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: ResultUserLinks;
  profile_image: ResultUserProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: ResultUserSocial;
}

export interface ResultCoverPhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface ResultCoverPhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Travel {
  status: string;
}

export interface Nature {
  status: string;
  approved_on?: Date;
}

export interface Wallpapers {
  status: string;
}

export interface ActForNature {
  status: string;
  approved_on: Date;
}

export interface ResultCoverPhotoTopicSubmissimons {
  travel: Travel;
  nature: Nature;
  wallpapers: Wallpapers;
  actfornature: ActForNature;
}

export interface ResultCoverPhotoUserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ResultCoverPhotoUserProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface ResultCoverPhotoUserSocial {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email?: any;
}

export interface ResultCoverPhotoUser {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: ResultCoverPhotoUserLinks;
  profile_image: ResultCoverPhotoUserProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: ResultCoverPhotoUserSocial;
}

export interface ResultCoverPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: ResultCoverPhotoUrls;
  links: ResultCoverPhotoLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: ResultCoverPhotoTopicSubmissimons;
  user: ResultCoverPhotoUser;
}

export interface PreviewPhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface PreviewPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  blur_hash: string;
  urls: PreviewPhotoUrls;
}

export interface Result {
  id: string;
  title: string;
  description: string;
  published_at: Date;
  last_collected_at: Date;
  updated_at: Date;
  curated: boolean;
  featured: boolean;
  total_photos: number;
  private: boolean;
  share_key: string;
  tags: Tag[];
  links: Links5;
  user: ResultUser;
  cover_photo: ResultCoverPhoto;
  preview_photos: PreviewPhoto[];
}

export interface RelatedCollections {
  total: number;
  type: string;
  results: Result[];
}

export interface IPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description?: any;
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: TopicSubmissions;
  user: User;
  exif: Exif;
  location: Location;
  meta: Meta;
  public_domain: boolean;
  tags: any[];
  tags_preview: any[];
  views: number;
  downloads: number;
  topics: any[];
  related_collections: RelatedCollections;
}
