import { useState, useMemo } from 'react'
import { useQuery } from 'react-query'
import { NewsService } from 'services/NewsService'
import { Switch } from 'components/UI/Dropdown'
import './NewsLine.scss'

interface INews {
  category: any[]
  content: string
  country: any[]
  creator: any[]
  description: string
  image_url: string | null
  keywords: any[]
  language: string
  link: string
  pubDate: string
  source_id: string
  title: string
  video_url: string | null
}

function NewsLine() {
  const [news, setNews] = useState<INews[] | []>([])
  const [show, setShow] = useState(false)
  const [toggle, setToggle] = useState(true)

  const { isLoading } = useQuery(
    'health news',
    () => NewsService.getHealthNews(),
    {
      onSuccess: ({ data }) => {
        setNews(data.results)
      },
      onError: (error: any) => {
        alert(error.message)
      },
    }
  )

  const randomNews = useMemo(
    () => news[Math.floor(Math.random() * news.length)],
    [news]
  )

  const handleToggle = () => {
    setToggle(!toggle)
  }

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <>
      {toggle && (
        <div className='news-line-wrapper'>
          {isLoading ? (
            <div className='loading'>Loading...</div>
          ) : news.length ? (
            <div className='news-line'>
              <div>
                <span>{randomNews.title}</span>
                <span>{randomNews.title}</span>
              </div>
            </div>
          ) : (
            <div>News not found.</div>
          )}
        </div>
      )}
      <div className='toggle-wrapper'>
        {show && (
          <div className='switch'>
            <Switch isChecked={toggle} onClickAction={handleToggle} />
          </div>
        )}
        <div className='toggle' onClick={handleShow} />
      </div>
    </>
  )
}

export default NewsLine
