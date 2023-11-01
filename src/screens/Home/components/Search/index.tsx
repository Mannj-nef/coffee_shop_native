import { useState } from 'react'

import { TouchableOpacity, View, TextInput } from 'react-native'
import styles from './styles'
import Icon from '../../../../components/Icons'
import { COLORS, FONTSIZE } from '../../../../themes'
import useCoffee from '../../../../stores/coffee'

interface SearchProps {}

const Search = ({}: SearchProps) => {
  const searchCoffee = useCoffee((state) => state.filterCoffeeBySearch)
  const resetCoffee = useCoffee((state) => state.resetCoffee)

  const [searchText, setSearchText] = useState('')

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}>
        <Icon
          style={{}}
          name="magnify"
          size={FONTSIZE.size_18}
          color={searchText.length > 0 ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
        />
      </TouchableOpacity>

      <TextInput
        placeholder="Find Your Coffee..."
        style={styles.textInputContainer}
        placeholderTextColor={COLORS.primaryLightGreyHex}
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text)
          searchCoffee(text)
        }}></TextInput>

      {!!searchText.length && (
        <TouchableOpacity
          onPress={() => {
            setSearchText('')
            resetCoffee()
          }}>
          <Icon style={styles.iconReset} name="close" size={FONTSIZE.size_18} color={COLORS.primaryLightGreyHex} />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Search
