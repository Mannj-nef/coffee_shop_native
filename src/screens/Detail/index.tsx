import { useEffect, useState } from 'react'
import { ScrollView, View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'
import ImageBackgroundInfo from '../../components/ImageBackgroundInfo'
import { ButtonBack } from '../../components/Button'
import StatusBarComponent from '../../components/StatusBar'
import { SPACING } from '../../themes'
import useShareStore from '../../stores/shared'
import SizeComponent from './components/size'

const Detail = ({ navigation, route }: any) => {
  const detail = useShareStore((state) => state.detail)
  const setDetail = useShareStore((state) => state.setDetail)

  useEffect(() => {
    const id = route?.params?.id
    const type = route?.params?.type

    if (!id || !type) return

    setDetail({ id, type })
  }, [])

  const onBack = () => {
    navigation.pop()
  }

  if (!detail) return

  return (
    <View style={styles.container}>
      <StatusBarComponent />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewFlex}>
        <ButtonBack handleBack={onBack} />

        <ImageBackgroundInfo coffee={detail} screen="detail" />

        <View style={{ marginTop: 10, paddingHorizontal: SPACING.space_30, marginBottom: 30 }}>
          <SizeComponent />
        </View>
      </ScrollView>
    </View>
  )
}

export default Detail
