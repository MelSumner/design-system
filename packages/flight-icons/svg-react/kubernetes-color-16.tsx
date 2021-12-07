import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconKubernetesColor16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill="#326DE6"
                    d="M4.5 14.569c.214.278.539.431.874.431h5.251c.335 0 .66-.165.875-.434l3.258-4.178c.214-.278.288-.633.214-.978l-1.165-5.207a1.128 1.128 0 00-.606-.777l-4.714-2.31A1.062 1.062 0 008.002 1c-.168 0-.335.038-.485.115l-4.715 2.32a1.129 1.129 0 00-.605.777L1.032 9.42c-.084.345 0 .7.214.978L4.5 14.568z"
                />
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M12.741 9.128c.098.003.196.01.293.024l.058.013.031.008a.308.308 0 01.26.371.306.306 0 01-.396.223h-.004l-.003-.001-.003-.001a1.58 1.58 0 00-.08-.017 2.55 2.55 0 01-.274-.106 2.867 2.867 0 00-.533-.156.243.243 0 00-.171.063 4.656 4.656 0 00-.131-.023 3.971 3.971 0 01-1.764 2.212c.015.042.032.083.051.123a.239.239 0 00-.023.18c.074.17.165.332.271.484.06.078.114.16.164.244l.028.057.012.025a.305.305 0 01-.132.434.31.31 0 01-.354-.066.307.307 0 01-.067-.107l-.01-.021a1.57 1.57 0 01-.028-.058 2.553 2.553 0 01-.089-.28 2.834 2.834 0 00-.21-.512.242.242 0 00-.156-.095 6.199 6.199 0 01-.03-.053l-.035-.064a3.97 3.97 0 01-2.823-.007l-.07.125a.249.249 0 00-.132.064 2.13 2.13 0 00-.237.548 2.518 2.518 0 01-.088.28l-.025.05-.013.027v.001a.306.306 0 01-.421.173.307.307 0 01-.132-.434l.014-.03.026-.052c.05-.085.104-.166.164-.244.108-.156.2-.322.277-.496a.302.302 0 00-.028-.173l.056-.133A3.972 3.972 0 014.22 9.532l-.134.023a.34.34 0 00-.176-.062 2.872 2.872 0 00-.533.156c-.09.04-.181.075-.274.105l-.05.011-.03.007H3.02l-.002.002h-.005a.308.308 0 01-.397-.349.306.306 0 01.261-.245l.005-.001h.002l.006-.002c.024-.006.054-.014.076-.018.097-.013.195-.021.293-.023.186-.013.37-.043.549-.09a.422.422 0 00.131-.133l.128-.037a3.938 3.938 0 01.625-2.752l-.098-.087a.338.338 0 00-.062-.176 2.854 2.854 0 00-.455-.319 2.557 2.557 0 01-.254-.148l-.048-.038-.015-.012-.004-.004a.323.323 0 01-.076-.45.295.295 0 01.244-.107.365.365 0 01.213.08l.022.017c.016.013.034.026.046.037.072.067.139.139.202.213.125.137.263.262.412.372.056.03.121.036.182.018l.11.078a3.938 3.938 0 012.552-1.224l.008-.129a.332.332 0 00.099-.157 2.844 2.844 0 00-.034-.554 2.56 2.56 0 01-.042-.29v-.082-.004A.306.306 0 018 2.82a.308.308 0 01.306.337v.087a2.529 2.529 0 01-.041.29 2.85 2.85 0 00-.035.553.242.242 0 00.1.153v.007l.007.13c.967.087 1.87.522 2.54 1.223l.116-.083a.34.34 0 00.186-.02c.149-.11.287-.235.412-.373.063-.074.13-.146.202-.213l.051-.04.017-.014a.307.307 0 11.381.477l-.024.02c-.015.012-.03.025-.043.034a2.537 2.537 0 01-.254.148 2.87 2.87 0 00-.455.32.241.241 0 00-.058.172l-.05.044-.058.053c.542.806.77 1.783.637 2.745l.123.036c.031.056.077.101.133.132.179.048.363.078.548.09zM7.291 5.24c.107-.024.216-.043.326-.056l-.09 1.6-.008.004a.268.268 0 01-.293.256.27.27 0 01-.135-.05l-.002.001-1.316-.93c.419-.41.945-.696 1.518-.825zm1.618 1.75l1.308-.924a3.182 3.182 0 00-1.833-.882l.09 1.598h.002a.268.268 0 00.294.256.27.27 0 00.135-.05l.004.002zm2.248 1.656l-1.548-.445-.002-.006a.27.27 0 01-.185-.343.27.27 0 01.08-.12L9.5 7.73l1.195-1.067c.366.594.527 1.29.46 1.983zM9.096 9.5l.618 1.49a3.148 3.148 0 001.275-1.598l-1.593-.269-.002.004a.26.26 0 00-.166.022.27.27 0 00-.13.348l-.002.003zm-.385 1.905c-.573.13-1.17.1-1.727-.088l.777-1.4h.001a.27.27 0 01.475-.001h.006l.779 1.402a3.286 3.286 0 01-.311.087zm-2.418-.422l.611-1.474-.004-.006a.268.268 0 00-.297-.37L6.6 9.13l-1.579.267a3.16 3.16 0 001.272 1.586zm-.997-4.32l1.201 1.071-.001.007a.269.269 0 01-.106.462l-.001.005-1.54.443a3.134 3.134 0 01.447-1.988zm2.95 1.154h-.492l-.307.38.11.476.443.213.442-.212.11-.476-.306-.381z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
