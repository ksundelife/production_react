import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolves } from "./buildResolves";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode } = options;

    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolves(),
        output: {
            filename: "[name].[contenthash].ts",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
    };
}