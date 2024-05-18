import { PermissionsAndroid, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Contacts, { Contact } from 'react-native-contacts';
import React, { useEffect, useState } from 'react';

const ProfileScreen: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [permissionDenied, setPermissionDenied] = useState(false);

    useEffect(() => {
        requestContactsPermission();
    }, []);

    const requestContactsPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                    title: 'Contacts',
                    message: 'This app would like to view your contacts.',
                    buttonPositive: 'Please accept bare mortal',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Contacts permission granted');
                fetchContacts();
            } else {
                console.log('Contacts permission denied');
                setPermissionDenied(true);
            }
        } catch (err) {
            console.error('Error requesting contacts permission: ', err);
        }
    };

    const fetchContacts = async () => {
        try {
            const fetchedContacts = await Contacts.getAll();
            setContacts(fetchedContacts);
        } catch (error) {
            console.error('Error fetching contacts: ', error);
        }
    };

    const filterContactsByLetter = (letter: string) => {
        const filteredContacts = contacts.filter(contact =>
            contact.displayName?.charAt(0).toUpperCase() === letter.toUpperCase());
        setContacts(filteredContacts);
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <TouchableOpacity style={styles.btn} onPress={requestContactsPermission}>
                    <Text style={styles.btnText}>Fetch Contacts</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.contactsAndAlphabet}>
                {permissionDenied ? (
                    <Text style={styles.permissionText}>Please grant permission to view contacts</Text>
                ) : (
                    <>
                        <ScrollView style={styles.contactsContainer}>
                            {contacts.map(contact => (
                                <View key={contact.recordID}>
                                    <Text style={styles.contactName}>{contact.displayName}</Text>
                                    {contact.phoneNumbers.map((phone, index) => (
                                        <Text key={index} style={styles.phoneNumber}>{phone.number}</Text>
                                    ))}
                                </View>
                            ))}
                        </ScrollView>
                        <View style={styles.alphabetContainer}>
                            {[...Array(26)].map((_, index) => {
                                const letter = String.fromCharCode(65 + index);
                                return (
                                    <ScrollView>
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.alphabetButton}
                                        onPress={() => filterContactsByLetter(letter)}>
                                        <Text style={styles.alphabetText}>{letter}</Text>
                                    </TouchableOpacity>
                                    </ScrollView>
                                );
                            })}
                        </View>
                    </>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    mainContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    btn: {
        padding: 15,
        backgroundColor: '#F9595F',
        borderRadius: 10,
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    contactsAndAlphabet: {
        flex: 1,
        flexDirection: 'row',
    },
    contactsContainer: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    contactName: {
        fontSize: 16,
        marginBottom: 5,
        color: "#000"
    },
    phoneNumber: {
        fontSize: 14,
        color: "#333"
    },
    permissionText: {
        fontSize: 16,
        color: 'red',
    },
    alphabetContainer: {
        alignSelf: 'flex-end',
        marginTop: 20,
        marginRight: 10,
        marginVertical:10
    },
    alphabetButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    alphabetText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default ProfileScreen;
