/* eslint-disable @typescript-eslint/no-unsafe-function-type */

/**
 * A simplified version of code from https://umaranis.com/2022/11/28/type-transformations-in-typescript-removing-functions-from-a-type/
 */
export type ExcludeFunctions<T> = Pick<
    T,
    { [key in keyof T]: T[key] extends Function ? never : key }[keyof T]
>

/*
 * https://piston-meta.mojang.com/mc/game/version_manifest_v2.json
 * https://minecraft.wiki/w/Version_manifest.json
 */
export type MCVersionManifestV2 = {
    latest: {
        release: string,
        snapshot: string
    },
    versions: {
        id: string,
        type: string,
        url: string,
        time: string,
        releaseTime: string,
        sha1: string,  // V2 only
        complianceLevel: 1 | 0  // V2 only
    }[]
}
