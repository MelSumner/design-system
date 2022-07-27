import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconAzureBlobStorageColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill="#2378BC"
                    d="M22 12.506c-.264.441-.527.879-.786 1.32-.213.36-.417.727-.63 1.089-.147.253-.302.501-.452.753-.188.315-.376.63-.561.947-.305.52-.607 1.041-.913 1.56-.253.43-.51.857-.763 1.286-.281.478-.562.957-.835 1.44-.045.08-.096.097-.18.097-.692-.002-1.383-.001-2.076-.001-2.553 0-5.107-.001-7.66.003-.126 0-.189-.042-.248-.145-.233-.405-.476-.804-.714-1.207-.144-.244-.285-.49-.428-.736-.232-.396-.463-.791-.696-1.186-.179-.305-.36-.61-.538-.915-.129-.219-.254-.439-.384-.657-.245-.412-.496-.822-.74-1.236-.214-.366-.42-.737-.634-1.103-.145-.25-.297-.495-.444-.742-.1-.17-.195-.341-.298-.51-.031-.05-.02-.09.005-.133.14-.242.281-.483.424-.724.13-.222.264-.443.396-.664l.46-.779c.177-.296.356-.592.53-.889.175-.297.346-.597.52-.895.207-.354.415-.708.625-1.062.182-.308.367-.615.55-.924.186-.315.371-.632.556-.948.278-.475.557-.95.83-1.428.046-.084.098-.117.196-.117.964.003 1.928.002 2.892.002h6.804c.031 0 .062.003.094 0 .07-.007.113.02.148.083.127.23.261.456.395.682.12.203.242.405.363.608.182.304.364.607.544.911.198.335.393.67.59 1.006.187.321.372.643.56.963.178.301.359.601.538.902.192.323.384.646.573.97.249.427.494.855.742 1.281.112.193.23.384.342.577.1.168.197.339.302.522v-.001zm-15.032-.02v3.717c0 .175.015.346.075.516.138.392.41.652.789.816.184.08.38.089.576.09h7.151c.265 0 .52-.034.756-.169.436-.25.67-.618.702-1.111.004-.065.003-.131.003-.197v-5.883c0-.258-.002-.516 0-.775 0-.055-.011-.099-.054-.14-.114-.108-.222-.225-.336-.334-.273-.262-.547-.521-.82-.784-.126-.122-.25-.248-.374-.372-.129-.126-.26-.249-.386-.379a.318.318 0 00-.252-.114c-2.124.004-4.249.003-6.373.003-.3 0-.583.06-.837.224a1.333 1.333 0 00-.538.662c-.069.18-.082.365-.082.554v3.677z"
                />
                <path
                    fill="#FAFDFE"
                    d="M6.968 12.487V8.81c0-.188.013-.374.082-.554.106-.28.285-.5.538-.662a1.5 1.5 0 01.836-.224c2.125 0 4.25 0 6.374-.003a.32.32 0 01.252.114c.125.13.257.253.386.38.125.123.248.25.374.371.273.263.547.522.82.784.114.11.222.226.336.335.043.04.055.084.054.14-.002.258 0 .516 0 .774v5.883c0 .066.001.131-.003.197-.031.494-.265.861-.702 1.111-.236.136-.49.168-.756.168H8.408c-.196 0-.392-.01-.576-.089-.38-.163-.651-.424-.79-.816-.059-.17-.074-.34-.074-.516v-3.716zM14.61 8.1H8.47c-.071 0-.144-.005-.214.007-.186.031-.342.106-.449.273-.084.13-.092.269-.092.414v7.408c0 .061-.001.123.005.184a.565.565 0 00.45.49c.104.02.211.027.318.027 2.304.002 4.607.002 6.91 0 .116 0 .232-.01.347-.018.226-.017.373-.142.473-.334.06-.114.057-.237.057-.359V11.91 9.927c0-.05-.007-.101-.012-.165H14.61V8.099z"
                />
                <path
                    fill="#2478BD"
                    d="M14.61 8.1v1.663h1.653c.005.064.012.114.012.165V16.193c0 .122.003.245-.057.359-.1.192-.247.317-.473.334-.116.008-.231.018-.346.018H8.488c-.107 0-.215-.006-.319-.026a.565.565 0 01-.449-.491c-.006-.061-.005-.123-.005-.184V8.795c0-.145.007-.284.092-.414.107-.167.263-.241.45-.273.069-.011.141-.007.213-.007h6.141V8.1zm-4.858 6.41c.013.17.02.34.04.51.024.176.068.348.154.509.117.218.29.362.533.416.152.034.307.035.464.02a.87.87 0 00.768-.576 2.09 2.09 0 00.13-.56 2.942 2.942 0 00-.128-1.33.71.71 0 00-.398-.416 1.156 1.156 0 00-.82-.045c-.33.098-.512.332-.618.632-.095.27-.12.554-.124.84h-.001zm4.492-4.02c-.019-.168-.041-.337-.056-.506a1.206 1.206 0 00-.258-.675.658.658 0 00-.271-.201 1.203 1.203 0 00-.536-.084c-.306.02-.556.138-.737.385-.15.205-.204.448-.231.688-.047.423-.048.846.07 1.262.051.18.13.342.283.459.288.219.618.232.951.156.34-.077.54-.313.647-.631a3.08 3.08 0 00.138-.852zm-.168 5.433a.432.432 0 00.068-.285c-.008-.112-.044-.148-.157-.152-.08-.002-.161 0-.241-.001-.057-.002-.113-.008-.185-.013v-2.428c-.104-.01-.192-.026-.28-.027a.573.573 0 00-.352.1c-.122.086-.253.159-.38.24-.055.035-.112.07-.162.111-.025.02-.05.056-.052.085a2.18 2.18 0 00-.001.25c.002.055.04.076.091.068a.37.37 0 00.115-.034c.105-.057.205-.12.309-.179.032-.018.07-.028.108-.043.027.2.018 1.763-.014 1.87h-.126c-.116 0-.232-.002-.348 0-.096.004-.128.035-.134.127-.004.048-.001.096-.002.144 0 .125.04.178.184.176.478-.007.955-.002 1.433-.003.044 0 .088-.004.125-.006h.001zm-2.875-4.405V9.072c-.142.004-.266-.039-.396-.011-.055.011-.117.016-.164.045-.196.12-.388.244-.577.372a.183.183 0 00-.074.103.487.487 0 00.032.342c.052-.017.104-.028.15-.05.113-.06.224-.124.337-.185.028-.014.06-.022.101-.035v1.304c0 .153.002.306 0 .46-.002.087-.013.098-.1.101-.098.003-.196 0-.294 0-.218 0-.242.026-.232.245l.003.04c.017.148.03.16.18.16h1.486c.053.003.09-.023.096-.072.01-.073.02-.148.017-.22-.008-.13-.033-.15-.165-.151-.124-.001-.248 0-.399 0v-.002z"
                />
                <path
                    fill="#F9FCFE"
                    d="M9.751 14.51c.005-.286.03-.57.125-.84.105-.3.288-.534.618-.632.281-.084.558-.071.82.045a.71.71 0 01.397.416c.153.434.18.878.129 1.33a2.09 2.09 0 01-.13.56.87.87 0 01-.768.575 1.417 1.417 0 01-.464-.019.776.776 0 01-.533-.416 1.459 1.459 0 01-.153-.51c-.022-.168-.028-.34-.042-.51h.001zm1.515-.049c-.02-.207-.035-.421-.067-.632a.6.6 0 00-.106-.264c-.113-.149-.451-.166-.57.028a1.24 1.24 0 00-.093.201c-.047.124-.051.255-.058.387-.017.327-.025.654.053.976.059.243.16.387.45.353.12-.013.21-.07.257-.18a.834.834 0 00.07-.223c.027-.212.043-.425.064-.645zM14.243 10.49a3.08 3.08 0 01-.138.853c-.107.318-.305.554-.646.631-.334.076-.664.063-.951-.156-.154-.117-.232-.28-.283-.46-.119-.415-.117-.839-.07-1.26.025-.242.08-.483.23-.689.182-.247.432-.365.737-.385.187-.013.366.016.536.084.106.042.198.11.272.201.16.2.236.425.258.675.014.169.036.338.055.506zm-1.51.046c-.008.25.007.514.088.772.037.116.107.207.23.23.137.024.276.027.382-.094a.694.694 0 00.156-.382 3.933 3.933 0 000-1.07 1.014 1.014 0 00-.091-.311c-.035-.07-.103-.147-.173-.169-.201-.063-.418-.02-.504.23-.086.253-.093.514-.088.794z"
                />
                <path
                    fill="#FAFCFE"
                    d="M14.075 15.924c-.037.002-.081.007-.125.007-.477 0-.955-.004-1.433.002-.144.002-.183-.051-.183-.176 0-.048-.002-.096 0-.144.007-.091.039-.123.135-.126.117-.003.233-.001.349-.001h.125c.032-.107.041-1.67.014-1.87-.038.015-.075.025-.108.043-.103.059-.204.122-.308.18a.368.368 0 01-.115.033c-.052.008-.09-.013-.092-.069-.002-.082-.006-.166.001-.249.003-.03.028-.064.052-.085.051-.041.107-.076.163-.111.127-.08.258-.154.38-.24a.567.567 0 01.351-.1c.088.001.176.016.28.027v2.428c.073.005.129.011.185.013.08.002.16-.002.241 0 .113.004.15.041.157.153a.435.435 0 01-.068.285zM11.2 11.519c.15 0 .275-.002.4 0 .132 0 .157.021.164.15.004.074-.006.148-.017.22-.007.05-.043.075-.095.074H10.165c-.15 0-.162-.013-.18-.162a.467.467 0 01-.003-.04c-.01-.218.015-.243.232-.243.099 0 .197.002.295-.001.087-.003.098-.014.099-.102.002-.153 0-.306 0-.46V9.653c-.04.013-.072.02-.1.035-.114.06-.224.126-.338.184-.046.024-.098.034-.15.051a.487.487 0 01-.032-.343.183.183 0 01.074-.103c.19-.127.382-.252.578-.371.046-.029.109-.033.164-.045.13-.028.253.015.396.011v2.448z"
                />
                <path
                    fill="#267ABE"
                    d="M11.266 14.461c-.02.22-.036.433-.063.645a.854.854 0 01-.071.223c-.047.109-.137.166-.257.18-.29.034-.391-.11-.45-.353-.078-.322-.07-.649-.053-.976.007-.132.01-.263.058-.387.027-.069.055-.138.094-.201.118-.195.457-.177.569-.028a.606.606 0 01.106.264c.032.21.046.425.067.632v.001zM12.733 10.535c-.005-.28.002-.541.089-.794.085-.25.302-.293.503-.23.07.022.138.1.173.17.048.094.077.203.092.31.051.356.046.714 0 1.07a.69.69 0 01-.156.383c-.106.12-.246.117-.382.093-.123-.023-.194-.114-.23-.23a2.276 2.276 0 01-.088-.772z"
                />
            </svg>
        );
    }
);