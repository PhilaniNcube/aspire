import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Projects
 *
 *
 */
export interface Project extends SanityDocument {
  _type: "project";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Images — `array`
   *
   *
   */
  images?: Array<string>;

  /**
   * Location — `string`
   *
   *
   */
  location?: string;

  /**
   * Current — `boolean`
   *
   *
   */
  current?: boolean;

  /**
   * Content — `array`
   *
   *
   */
  content?: Array<SanityKeyed<SanityBlock>>;
}

/**
 * Docs
 *
 *
 */
export interface Doc extends SanityDocument {
  _type: "doc";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Period — `string`
   *
   *
   */
  period?: string;

  /**
   * Category — `string`
   *
   *
   */
  category?:
    | "annual_reports"
    | "app"
    | "budgets"
    | "corporate_reports"
    | "midyear_reports"
    | "policies_and_charters"
    | "strategic_documents";

  /**
   * Content — `file`
   *
   *
   */
  content?: string;
}

/**
 * Tenders
 *
 *
 */
export interface Tender extends SanityDocument {
  _type: "tender";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Tender Number — `string`
   *
   *
   */
  tenderNumber?: string;

  /**
   * Closing Date — `date`
   *
   *
   */
  closingDate?: string;

  /**
   * Tender Document — `file`
   *
   *
   */
  tenderDocument?: string;
  /**
   * Tender Documents — `array`
   *
   *
   *
   *

  /**
   * Awarded — `boolean`
   *
   *
   */
  awarded?: boolean;

  /**
   * Price — `number`
   *
   *
   */
  price?: number;

  closeOutDocument?: string;
}

/**
 * News
 *
 *
 */
export interface News extends SanityDocument {
  _type: "news";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Category — `category`
   *
   *
   */

   category?:
    | "Bulletin"
    | "Newsletter";

/**
   * Images — `image`
   *
   *
   */
  image?: string;

  /**
   * Content — `array`
   *
   *
   */
  content?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Author — `reference`
   *
   *
   */
  author?: string;
}

/**
 * Vacancies
 *
 *
 */
export interface Vacancy extends SanityDocument {
  _type: "vacancy";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Location — `string`
   *
   *
   */
  location?: string;

  /**
   * Closing Date — `date`
   *
   *
   */
  closingDate?: string;

  /**
   * Vacancy Document — `file`
   *
   *
   */
  vacancyDocument?: string;
}

/**
 * Authors
 *
 *
 */
export interface Author extends SanityDocument {
  _type: "author";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Email — `string`
   *
   *
   */
  email?: string;
}

export type Documents = Project | Doc | Tender | News | Vacancy | Author;
