import{View,Text,FlatList,StyleSheet,ActivityIndicator, Image} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from './api/posts';

export default function App() {
    //useQuery é um hook principal do Tanstack Query
    const { data, isLoading, error,isError, isFetching, refetch } = useQuery({
        queryKey: ['posts'], //chave única para identificar a consulta
        queryFn: fetchPosts, //função que busca os dados
    });

    //Exibe uma ActiviyIndicator enquanto os dados estão sendo carregados
    if(isLoading){
        return <ActivityIndicator size="large" style={styles.center}/>
    }

    if(isError){
        
        return(
            <View>
                <Text>Erro ao buscar os dados</Text> 
                <Text>
                    {error.message}
                </Text>
            </View>           
        )
    }

    return(
        <FlatList

            data={data}
            keyExtractor = {(item)=> item.id.toString()}
            refreshing={isFetching}
            onRefresh={refetch}
            renderItem={({item})=> (
                <View style={styles.item}>
                    <Text style ={styles.tittle}>{item.name}</Text>
                    <Image source= {{uri:item.avatar}} width={200} height={200}/>

                </View>
            )}
        />
    )

}


const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    item:{
        padding:16,
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    tittle:{
        fontWeight:'bold',
        marginBottom: 4
    }

    }
)
