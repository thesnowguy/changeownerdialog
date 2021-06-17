// HTML
<g:ui_form>
	<input type="hidden" name="tName" value="${RP.getWindowProperties().get('tableName')}" />
	<input type="hidden" name="fName" value="${RP.getWindowProperties().get('fieldName')}" />
	<input type="hidden" name="rID" value="${RP.getWindowProperties().get('recordID')}" />



	<table class="modal-dialog" width="100%">

		<tr id="itemrow" >

			<td>
				<div>
					<div class="col-md-12">
						<g:form_label>
							${gs.getMessage('Select Alternate Issue Owner')}
						</g:form_label>
					</div>
					<div class="col-md-12">
						<g:ui_reference name="item_ref_field" query="active=true" table="sys_user"  />
					</div>
				</div>			
			</td>

		</tr>

		<tr><td colspan="2"><br /></td></tr>
		<tr class="btn" id="dialogbuttons"><td colspan="2" align="right">
			<g:dialog_buttons_ok_cancel ok="return redirect()"/>
			</td>
		</tr>
	</table> 
</g:ui_form>


// Processing Script
updateUser(tName, rID, item_ref_field, fName);

function updateUser(t, r, u, f){
	var gr = new GlideRecord(t);
	if(gr.get(r)){
		gr.setValue(f, u);
		gr.update();
	} 

	var urlOnStack = GlideSession.get().getStack().bottom();
	response.sendRedirect(urlOnStack);
}

