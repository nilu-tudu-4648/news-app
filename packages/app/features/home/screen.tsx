
import { getLatestNews } from '../../api/news'
import { News } from '../../types/news'
import { Text, useSx, View, H1, P, Row, A, H2, Image } from 'dripsy'
import { useEffect, useState } from 'react'
import { Platform,FlatList } from 'react-native'
import { TextLink } from 'solito/link'

export function HomeScreen() {
  const sx = useSx()

  const [latestNews, setLatestNews] = useState<News[]>([])

  useEffect(() => {
    getLatestNews().then((data) => {
      setLatestNews(data)
    })
  }, [])

  const renderItem =({ item }: { item: News }) => (
    <View sx={{ paddingHorizontal: 16, marginBottom: 20 }}>
      <View
        sx={{
          padding: 16,
          borderWidth: 1,
          borderColor: '#ddd',
          borderRadius: 8,
        }}
      >
        {item.imageUrl && (
          <View sx={{ minHeight: 300, marginBottom: 16 }}>
            <Image
              source={{ uri: item.imageUrl }}
              height={300}
              alt={item.title}
              sx={{ flex: 1, borderRadius: 8 }}
            />
          </View>
        )}
        <TextLink href={`/latest-news/${item.id}`}>
          <H2 sx={{ color: '#444', fontSize: 18 }}>{item.title}</H2>
        </TextLink>
      </View>
    </View>
  )

  return (
    <View>
      {Platform.OS === 'web' && (
        <View sx={{ paddingHorizontal: 16 }}>
          <H1 sx={{ marginBottom: 10 }}>Latest News</H1>
        </View>
      )}
      <FlatList
        // style={{ marginTop: 16 }}
        data={latestNews}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  )
}