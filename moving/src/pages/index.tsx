import Image from 'next/image';
import Slide from '@/components/detail/components/Slider';
import YoutubeIcon from '@/icons/youtubeIcon.svg';
import XIcon from '@/icons/x(sns)Icon.svg';
import LogoGray from '@/icons/LogoGray.svg';
import TiktokIcon from '@/icons/tiktokIcon.svg';
import InstarIcon from '@/icons/instagramIcon.svg';
import Recent from '@/components/render/Recent';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/mainPage');
  };

  return (
    <>
      <section className="">
        <div className="relative h-auto w-full">
          <div
            className="absolute inset-0 
            bg-[rgba(11,11,11,0.9)] bg-gradient-to-t from-[#131518]  to-[rgba(59,63,69,0)]"
          />

          <Image
            src={'/images/landerBanner.png'}
            layout="responsive"
            width={1920}
            height={840}
            alt="메인 베너"
          />
          <div className="text-[#f3f3f3]] absolute left-[50%] top-[50%] w-[700px] translate-x-[-50%] translate-y-[-50%] text-center">
            <h1 className="text-[#f3f3f3]] flex flex-col gap-2  whitespace-nowrap">
              <span className="text-5xl font-bold leading-[72px]">
                인기 상영작부터<br></br> 곧 개봉하는 따끈한 신작들까지!<br></br>
                &nbsp;무제한으로 스트리밍 해보세요.
              </span>
            </h1>
            <button
              className="mt-8 h-[63px] w-[356px] rounded-xl bg-[#2D73F3] text-xl font-bold"
              onClick={handleButtonClick}
            >
              지금 시청하기
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="m-auto mt-[152px] w-[1400px] text-[#d9d9d9]">
            <h3 className="mt-[72px] text-[40px] font-semibold leading-[64px]">
              매달 새롭게 추가되는 MOVING 콘텐츠를<br></br> 언제나 광고 없이.
            </h3>
            <h3 className="mt-[72px] text-[40px] font-semibold leading-[64px]">
              몰입감 넘치는 공간 음향으로 감상하는 4K HDR 영상<br></br> 하나의
              멤버십으로 최대 5명과 함께.
            </h3>
            <h3 className="mt-[72px] text-[40px] font-semibold leading-[64px]">
              스마트 기기, 스마트 TV, 게임 콘솔 또는 스틱 등을 통해<br></br>
              MOVING 앱에서 스트리밍 가능.
            </h3>

            <div className="py-[72px] text-[#d9d9d9]">
              <div className="m-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 sm:flex-row">
                {[
                  {
                    title: 'BASIC',
                    price: '5,500',
                    priceColor: 'text-gray-100',
                    borderColor: '#363636',
                    cardColor: '#202125',
                    quality: '좋음',
                    resolution: '1080p (풀HD)',
                    devices: 'TV, 컴퓨터, 스마트폰, 태블릿',
                    deviceCount: '2',
                    ads: '적은 광고',
                    tags: [],
                    imageCount: 1,
                  },
                  {
                    title: 'STANDARD',
                    price: '7,500',
                    priceColor: 'text-blue-400',
                    borderColor: '#363636',
                    cardColor: '#202125',
                    quality: '매우 좋음',
                    resolution: '1080p (풀HD)',
                    devices: 'TV, 컴퓨터, 스마트폰, 태블릿',
                    deviceCount: '2',
                    ads: '광고 없음',
                    tags: [{ label: '고화질', color: '#d9d9d9' }],
                    imageCount: 2,
                  },
                  {
                    title: 'PREMIUM',
                    price: '12,500',
                    priceColor: 'text-yellow-400',
                    cardColor: '#202125',
                    borderColor: '#2D73F3',
                    quality: '매우 좋음',
                    resolution: '4K(UHD) + HDR',
                    devices: 'TV, 컴퓨터, 스마트폰, 태블릿',
                    deviceCount: '4',
                    ads: '광고 없음',
                    tags: [
                      { label: '가장 인기있는', color: '#2D73F3' },
                      { label: '프리미엄', color: '#2D73F3' },
                    ],
                    imageCount: 3,
                  },
                ].map((plan, index) => (
                  <div
                    key={index}
                    className={`flex h-[395px] w-full flex-col rounded-lg p-8 shadow-md transition-transform hover:scale-105 sm:w-[372px]`}
                    style={{
                      backgroundColor: plan.cardColor,
                      border: `2px solid ${plan.borderColor}`,
                    }}
                  >
                    <div>
                      <h2 className="mr-2 inline-block text-left text-2xl font-bold">
                        {plan.title}
                      </h2>
                      {plan.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="mr-1 rounded-full border px-2 py-1 text-xs font-semibold"
                          style={{
                            borderColor: tag.color,
                            color: tag.color,
                          }}
                        >
                          {tag.label}
                        </span>
                      ))}
                      <p
                        className={`text-5xl font-extrabold ${plan.priceColor} mt-1 text-left`}
                      >
                        {plan.price}
                        <span className="ml-1 text-base font-medium">
                          원 / 월
                        </span>
                      </p>
                    </div>

                    <div className="my-6 flex space-x-2">
                      {Array.from({ length: plan.imageCount }).map(
                        (_, imageIndex) => (
                          <Image
                            key={imageIndex}
                            src={'/images/check.png'}
                            width={32}
                            height={32}
                            alt={`check icon ${imageIndex + 1}`}
                          />
                        )
                      )}
                    </div>
                    <ul className="text-gray-300 space-y-4 text-sm">
                      <li>
                        <span className="mr-4 inline-block h-[16px] w-[75px] font-semibold text-white">
                          화질과 음질
                        </span>{' '}
                        {plan.quality}
                      </li>
                      <li>
                        <span className="mr-4 inline-block h-[16px] w-[75px] font-semibold text-white">
                          해상도
                        </span>{' '}
                        {plan.resolution}
                      </li>
                      <li>
                        <span className="mr-4 inline-block h-[16px] w-[75px] font-semibold text-white">
                          디바이스
                        </span>{' '}
                        {plan.devices}
                      </li>
                      <li>
                        <span className="mr-4 inline-block h-[16px] w-[75px] font-semibold text-white">
                          기기 수
                        </span>{' '}
                        {plan.deviceCount}
                      </li>
                      <li>
                        <span className="mr-4 inline-block h-[16px] w-[75px] font-semibold text-white">
                          광고
                        </span>{' '}
                        {plan.ads}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative m-auto mt-[156px] w-[1400px]">
            <h3 className="mb-4 text-center text-[40px] font-semibold  text-white">
              영화를 가장 빠르게
            </h3>
            <p className=" mb-11 text-center text-[24px] font-medium text-white">
              오직 무빙에서만
              <br /> 개봉 영화를 감상해 보세요.
            </p>

            <Recent></Recent>
          </div>

          <Slide></Slide>
          <div className="m-auto my-[300px]  flex flex-col items-center">
            <div>
              <Image
                src={'/images/moving-large.png'}
                layout=""
                width={282}
                height={64}
                alt="메인 베너"
              />
            </div>
            <div>
              <h3 className="text-[40px] font-semibold text-[#d9d9d9]">
                지금 시작해보세요.
              </h3>
            </div>
            <div>
              <button
                className="mt-8 h-[63px] w-[356px] rounded-xl bg-[#2D73F3] text-xl font-bold"
                onClick={handleButtonClick}
              >
                지금 시청하기
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="mt-[108px] opacity-60">
        <hr className="border-[#1E1E1E]" />
        <div className="mx-[160px] my-5 flex gap-4 text-base text-[#dfdfdf]  ">
          <span>회사 소개</span>
          <span>서비스 소개</span>
          <span>이용약관</span>
          <span>개인정보 처리방침</span>
          <span>고객센터</span>
          <span>이벤트</span>
        </div>
        <hr className="border-[#1E1E1E]" />
        <div className="mx-[160px] mt-10">
          <div className="mb-[30px] flex justify-between">
            <LogoGray />
            <div className="flex gap-4">
              <YoutubeIcon />
              <InstarIcon />
              <TiktokIcon />
              <XIcon />
            </div>
          </div>

          <div className="mb-[60px] text-[#3e4248]">
            <p>
              무빙 주식회사대표이사 이태현고객센터 1599-3709 (평일 09:00~18:00 /
              점심시간 12:00~13:00 / 주말 및 공휴일 휴무)
            </p>
            <p>
              인천광역시 미추홀구 용현 5동 전자우편주소 : mangoj425@Gmail.c om
            </p>
            <p>Copyright© 컨텐츠무빙(주) All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
