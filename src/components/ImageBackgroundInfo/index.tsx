import { ReactNode } from 'react'
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { typeCoffe } from '../../types/coffee'
import styles from './styles'
import GradientBGIcon from '../GradientBGIcon'
import { COLORS, FONTSIZE } from '../../themes'
import Icon from '../Icons'
import LinearGradient from 'react-native-linear-gradient'

interface ImageBackgroundInfoProps {
  coffee: typeCoffe
  screen: 'detail' | 'favorite'
}

const ImageBackgroundInfo = ({ coffee, screen }: ImageBackgroundInfoProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: coffee.imagelink_square }}
        style={[
          styles.coffeeImage,
          {
            overflow: screen === 'favorite' ? 'hidden' : 'visible',
          },
        ]}
        resizeMode="cover">
        <View style={styles.btnAction}>
          <TouchableOpacity>
            <GradientBGIcon name="heart" size={FONTSIZE.size_16} color={COLORS.primaryRedHex} />
          </TouchableOpacity>
        </View>

        <View style={styles.mainInfo}>
          <View style={styles.mainInfoWrapperTop}>
            <View style={styles.mainInfoLeft}>
              <Text style={[styles.PropertyText, styles.PropertyTextName]}>{coffee.name}</Text>
              <Text style={[styles.PropertyText]}>{coffee.special_ingredient}</Text>
            </View>

            <View style={styles.mainInfoRight}>
              <View style={styles.mainInfoRightIcon}>
                <Icon name="coffee" color={COLORS.primaryOrangeHex} size={FONTSIZE.size_20} />

                <Text style={[styles.PropertyText, styles.PropertyTextRight]}>{coffee.type}</Text>
              </View>

              <View style={styles.mainInfoRightIcon}>
                <Icon name="water" color={COLORS.primaryOrangeHex} size={FONTSIZE.size_20} />

                <Text style={[styles.PropertyText, styles.PropertyTextRight]}>{coffee.ingredients}</Text>
              </View>
            </View>
          </View>

          <View style={styles.mainInfoWrapperBottom}>
            <View style={styles.mainInfoBottomLeft}>
              <Icon name="star" color={COLORS.primaryOrangeHex} size={FONTSIZE.size_20} />

              <Text style={[styles.PropertyText]}>{coffee.average_rating}</Text>
              <Text style={[styles.PropertyText]}>({coffee.ratings_count})</Text>
            </View>

            <View style={styles.mainInfoBottomRight}>
              <Text style={[styles.PropertyText]}>{coffee.roasted}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <Description screen={screen}>
        <Text style={[styles.PropertyText, styles.PropertyTextDescriptionTitle]}>Description</Text>
        <Text numberOfLines={4} style={[styles.PropertyText, styles.PropertyTextDescription]}>
          {coffee.description}
        </Text>
      </Description>
    </View>
  )
}

function Description({ children, screen }: { children: ReactNode; screen: 'detail' | 'favorite' }) {
  const idDetailScreen = screen === 'detail'

  return (
    <>
      {idDetailScreen ? (
        <View style={[styles.descriptionWrapper]}>{children}</View>
      ) : (
        <LinearGradient colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]} style={styles.descriptionWrapper}>
          {children}
        </LinearGradient>
      )}
    </>
  )
}

export default ImageBackgroundInfo
