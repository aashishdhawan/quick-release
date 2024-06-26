export interface IReleaseCategoriesOption {
    value: string;
    label: string;
  }
  
  export interface ReleaseTagsOption {
    readonly value: string;
    readonly label: string;
  }

  export interface IChangeLogPost extends FormChangeLogPost {
    id?: string;
    status: string;
    releaseCategories: string[];
  }

  export interface User {
    id: String;
    createdAt: DateTime;
    updatedAt: DateTime;
    firstName: String;
    lastName: String;
    profilePicture?: String;
    email: String;
    password: String;
    resetToken?: String;
    resetTokenExpiry?: String;
    isActive: Boolean;
    isVerified: Boolean;
    role: String;
    organisationId: String;
    organisation?: Organisation;
    projects: Project[];
    verificationToken?: String;
    verificationTokenExpiry?: String;
  }
  
  export interface IFile {
    encoding: string;
    buffer: Buffer;
    fieldname: string;
    mimetype: string;
    originalname: string;
    size: number;
  }
  
  export interface Project {
    id: String;
    createdAt: DateTime;
    updatedAt: DateTime;
    name: String;
    logs: Log[];
    User?: User;
    adminId?: String;
    isActive: Boolean;
  }