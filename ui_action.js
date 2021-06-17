function updateUser() {
    var sysID = g_form.getUniqueValue();
    var tblName = g_form.getTableName();
    var fldName = 'issue_manager'; // Specify the field that you want to update. Can be any reference field that references the user table.

    var gDialog = new GlideDialogWindow("alternate_user_selection");
    gDialog.setPreference('recordID', sysID);
    gDialog.setPreference('tableName', tblName);
    gDialog.setPreference('fieldName', 'issue_manager');
    gDialog.setTitle('Assign Alternate User');
    gDialog.setSize(600, 1000); //Set the dialog size
    gDialog.removeCloseDecoration(); //remove the close cross from the dialogwindow
    gDialog.render();
}
