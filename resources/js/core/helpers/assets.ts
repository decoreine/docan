import {iconsStyle, illustrationsSet} from '@/core/helpers/themes_config'

export const getIllustrationsPath = (illustrationName: string): string => {
    const extension = illustrationName.substring( illustrationName.lastIndexOf("."), illustrationName.length );
    const illustration = illustrationName.substring(0, illustrationName.lastIndexOf("."));

    return import.meta.env.BASE_URL + `media/illustrations/${illustrationsSet.value}/${illustration}${extension}`;
};

export const getAssetPath = (path: string): string => {
    return import.meta.env.BASE_URL + path;
};

export const getIconPath = (iconName: string): string => {
    const extension = "svg";

    return import.meta.env.BASE_URL + `media/icons/${iconsStyle.value}/${iconName}${extension}`;
};
