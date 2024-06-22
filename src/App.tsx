import './app.css'
import useEmblaCarousel from 'embla-carousel-react'

export function App(){
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className='min-h-screen bg-zinc-900 pt-10 md:pt-32' style={{
      '--page-padding-left': 'max(env(safe-area-inset-left), 24px)',
      '--page-padding-right': 'max(env(safe-area-inset-right), 24px)',
      '--edge': 'calc((100vw - 1280px) / 2)',
      '--min-edge': 'calc(var(--edge) - 16px)',
      '--min-padding': 'calc(var(--page-padding-left) - 16px)'
    }}>
      <div className='max-w-7xl mx-auto'>
        <span className='text-zinc-200 font-medium block mb-3'>
          <a href="https://www.embla-carousel.com/get-started/react/" target='_blank'>Embla Carousel React</a>
        </span>
        <h1 className='font-bold tracking-tight text-3xl md:text-6xl max-w-xl text-zinc-100'>
          Carousel full-width.
        </h1>
      </div>

      <section className='mt-10'>
        <div className='relative w-[100vw] left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] overflow-hidden'>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex gap-4 fit-content before:block before:min-w-[max(var(--min-edge),_var(--min-padding))]">
              <div className="bg-zinc-950 shrink-0 w-[300px] embla__slide h-[500px] p-6 rounded-3xl flex flex-col items-start justify-end text-zinc-100 text-2xl">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold tracking-tight'>Slide 1</h3>
                  <p className='text-sm text-zinc-400 leading-relaxed font-medium'>Lorem ipsum dolor elit.</p>
                </div>
              </div>
              <div className="bg-zinc-950 shrink-0 w-[300px] embla__slide h-[500px] p-6 rounded-3xl flex flex-col items-start justify-end text-zinc-100 text-2xl">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold tracking-tight'>Slide 2</h3>
                  <p className='text-sm text-zinc-400 leading-relaxed font-medium'>Lorem ipsum dolor elit.</p>
                </div>
              </div>
              <div className="bg-zinc-950 shrink-0 w-[300px] embla__slide h-[500px] p-6 rounded-3xl flex flex-col items-start justify-end text-zinc-100 text-2xl">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold tracking-tight'>Slide 3</h3>
                  <p className='text-sm text-zinc-400 leading-relaxed font-medium'>Lorem ipsum dolor elit.</p>
                </div>
              </div>
              <div className="bg-zinc-950 shrink-0 w-[300px] embla__slide h-[500px] p-6 rounded-3xl flex flex-col items-start justify-end text-zinc-100 text-2xl">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold tracking-tight'>Slide 4</h3>
                  <p className='text-sm text-zinc-400 leading-relaxed font-medium'>Lorem ipsum dolor elit.</p>
                </div>
              </div>
              <div className="bg-zinc-950 shrink-0 w-[300px] embla__slide h-[500px] p-6 rounded-3xl flex flex-col items-start justify-end text-zinc-100 text-2xl">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold tracking-tight'>Slide 5</h3>
                  <p className='text-sm text-zinc-400 leading-relaxed font-medium'>Lorem ipsum dolor elit.</p>
                </div>
              </div>
              <div className="bg-zinc-950 shrink-0 w-[300px] embla__slide h-[500px] p-6 rounded-3xl flex flex-col items-start justify-end text-zinc-100 text-2xl">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold tracking-tight'>Slide 6</h3>
                  <p className='text-sm text-zinc-400 leading-relaxed font-medium'>Lorem ipsum dolor elit.</p>
                </div>
              </div>
              <div className="bg-zinc-950 shrink-0 w-[300px] embla__slide h-[500px] p-6 rounded-3xl flex flex-col items-start justify-end text-zinc-100 text-2xl">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold tracking-tight'>Slide 7</h3>
                  <p className='text-sm text-zinc-400 leading-relaxed font-medium'>Lorem ipsum dolor elit.</p>
                </div>
              </div>
              <div className="bg-zinc-950 shrink-0 w-[300px] embla__slide h-[500px] p-6 rounded-3xl flex flex-col items-start justify-end text-zinc-100 text-2xl">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold tracking-tight'>Slide 8</h3>
                  <p className='text-sm text-zinc-400 leading-relaxed font-medium'>Lorem ipsum dolor elit.</p>
                </div>
              </div>
              <div className="bg-zinc-950 shrink-0 w-[300px] embla__slide h-[500px] p-6 rounded-3xl flex flex-col items-start justify-end text-zinc-100 text-2xl">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold tracking-tight'>Slide 9</h3>
                  <p className='text-sm text-zinc-400 leading-relaxed font-medium'>Lorem ipsum dolor elit.</p>
                </div>
              </div>
              <div className="bg-zinc-950 shrink-0 w-[300px] embla__slide h-[500px] p-6 rounded-3xl flex flex-col items-start justify-end text-zinc-100 text-2xl">
                <div className='flex flex-col gap-2'>
                  <h3 className='font-bold tracking-tight'>Slide 10</h3>
                  <p className='text-sm text-zinc-400 leading-relaxed font-medium'>Lorem ipsum dolor elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
